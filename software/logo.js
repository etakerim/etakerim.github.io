/*
    ACTIONS = {
        'nechsmer': (t, a) => { t.angle = a % 360 },
        'nechxsuradnica': (t, x) => { t.x = x % t.ctx.width() },
        'nechysuradnica': (t, x) => { t.y = y % t.ctx.width() },
        'cakaj': async (t, ms) => { await t.sleep(ms) }
    }

nechPozicia/nechPoz [x y]/?
guma - pd
nechFarbaPera/nechFp "color1-12/?/[r g b]
nechFarbaVyplne/NechFv "color1-12/?/[r g b]
nechFarbaPozadia "color1-12/?/[r g b]

opakuj 4[do 50 vp 90]  // zásobník s počítadlami
vypln
uprav "xxx  virem xxx prikazy koniec (modal) 
----> Open modal a autocomplete z procedure uložisko

---> Tlačidlá
- ulož projekt (svg, historia, procedury) -> zip
- nacitaj projekt
--> Nápoveda pre príkazy
*/

/*
Chyby:
Nevirem ako sa robí xxx
Buď si sa pomýlil v mene procedúry alebo si ju ešte vôbec nedefinoval

Neočakával som pravú zátvorku "]"
Počet ľavých a pravých zátvoriek musí byť rovnaký

nechfp neobľubuje [2550 0] ako svoj vstup
Procedúra nechfp očakáva farbu [r g b] ako svoj vstup
*/
class Canvas {
    NS = 'http://www.w3.org/2000/svg';

    constructor(elrement) {
        this.svg = elrement;
    }

    width() {
        return parseFloat(this.svg.getAttribute('width'));
    }

    height() {
        return parseFloat(this.svg.getAttribute('height'));
    }

    clear() {
        this.svg.textContent = '';
    }

    wrapLine(x1, y1, x2, y2) {
        const o = -1;
        const w = this.width() - o;
        const h = this.height() - o;

        const topCorner = {x: o, y: o};
        const top = {x: w, y: o};
        const left = {x: o, y: h};
        const downCorner = {x: w, y: h};
        const right = {x: o, y: -h};
        const down = {x: -w, y: o};

        let a = {x: x1, y: y1};
        let b = {x: x2, y: y2};
        let v = {x: b.x - a.x, y: b.y - a.y};

        let segments = new Array();
        let divided = true;
        let start = a;

        while (divided) {
            let split = null;

            if ((split = intersection(a, v, topCorner, top)) !== null) {         
                start = {x: split.x, y: h}; 
            } else if ((split = intersection(a, v, topCorner, left)) !== null) {
                start = {x: w, y: split.y};
            } else if ((split = intersection(a, v, downCorner, right)) !== null) {
                start = {x: 0, y: split.y};
            } else if ((split = intersection(a, v, downCorner, down)) !== null) {
                start = {x: split.x, y: 0};
            } else {
                divided = false;
                split = {x: b.x, y: b.y, t: 1, s: 1};
            }

            v.x *= (1 - split.t)
            v.y *= (1 - split.t);
            segments.push({
                x1: a.x, y1: a.y, 
                x2: split.x, y2: split.y
            });
            a = start;
            b = {x: start.x + v.x, y: start.y + v.y};
        }

        return segments;   
    }

    line(x1, y1, x2, y2, color, width) {
        // wrap lines going out of frame
        const g = document.createElementNS(this.NS, 'line');
        g.setAttribute('x1', x1);
        g.setAttribute('y1', y1);
        g.setAttribute('x2', x2);
        g.setAttribute('y2', y2);
        g.setAttribute('stroke', color);
        g.setAttribute('stroke-width', width);
        g.setAttribute('stroke-linecap', 'round');
        this.svg.appendChild(g);
        return g;
    }

    circle(cx, cy, r, color) {
        const g = document.createElementNS(this.NS, 'circle');
        g.setAttribute('cx', cx);
        g.setAttribute('cy', cy);
        g.setAttribute('r', r);
        g.setAttribute('fill', color);
        this.svg.appendChild(g);
        return g;
    }

    image(source, x, y, w, h, heading) {
        const g = document.createElementNS(this.NS, 'image');
        g.setAttribute('x', x);
        g.setAttribute('y', y);
        g.setAttribute('width', w);
        g.setAttribute('height', h);
        g.setAttribute('transform', 
                       `rotate(${heading}, ${x}, ${y})
                        translate(-${w/2}, -${h/2})`);
        g.setAttribute('href', source);
        this.svg.appendChild(g);
        return g;
    }
}

class Turtle {
    // 6 je default (1 - 12)
    pallete = {
        'cierna': ['#000000'],
        'biela': ['#ffffff'],
        'siva': [
            '#000000', '#202020', '#383838', '#505050',
            '#686868', '#808080', '#989898', '#b0b0b0',
            '#c0c0c0', '#d8d8d8', '#f0f0f0', '#ffffff'
        ],
        'purpurova': [
            '#280010', '#480820', '#700838', '#981048',
            '#d01860', '#f81878', '#f85098', '#f880b0',
            '#f8a0c8', '#ffb8d0', '#ffd0e0', '#ffe0f0'
        ],
        'fialova': [
            '#180028', '#300048', '#480070', '#680098',
            '#8800d0', '#a800f8', '#c040f8', '#d068f8',
            '#d898f8', '#e0b0ff', '#e8c8ff', '#f8e0ff'
        ],
        'modra': [
            '#000028', '#000050', '#000080', '#0000a8',
            '#0000d8', '#0000ff', '#4040ff', '#6868ff',
            '#9090ff', '#b0b0ff', '#c8c8ff', '#e0e0ff'
        ],
        'azurova': [
            '#002828', '#005050', '#008080', '#00a8a8',
            '#00d8d8', '#00ffff', '#40ffff', '#68ffff',
            '#90ffff', '#b0ffff', '#d0fff8', '#e0ffff'
        ],
        'zelena': [
            '#002800', '#005000', '#008000', '#00a800',
            '#00d000', '#00ff00', '#40ff40', '#70ff70',
            '#90ff90', '#b0ffb0', '#c8ffc8', '#e0ffe0'
        ],
        'zlta': [
            '#282800', '#505000', '#808000', '#a8a800',
            '#d8d800', '#ffff00', '#ffff40', '#ffff70',
            '#ffff98', '#ffffb0', '#ffffc8', '#ffffe0'
        ],
        'hneda': [
            '#200800', '#382018', '#583820', '#785030',
            '#a86840', '#c87f48', '#d8a078', '#e0b898',
            '#e8c8b0', '#f0d8c8', '#f8e8d8', '#f8f0f0'
        ],
        'cervena': [
            '#280000', '#500000', '#800000', '#a80000',
            '#d80000', '#ff0000', '#ff4040', '#ff6868',
            '#ff9090', '#ffb0b0', '#ffc8c8', '#ffe8e8'
        ],
        'ruzova': [
            '#280028', '#500050', '#800080', '#a800a8',
            '#d800d8', '#ff00ff', '#ff48ff', '#ff70ff',
            '#ff90ff', '#ffb0ff', '#ffc8ff', '#ffe0ff'
        ],
        'tmavomodra': [
            '#000020', '#100838', '#200860', '#300888',
            '#4810e8', '#3708b8', '#7848e8', '#9870f0',
            '#b098f8', '#c8b0f8', '#d8c8f8', '#e8e0ff'
        ],
        'belasa': [
            '#001828', '#003040', '#005068', '#007098',
            '#0090d0', '#00b0f8', '#40c0f8', '#68d0f8',
            '#90e0f8', '#b0e8ff', '#d0f0f8', '#e0f8ff'

        ],
        'tmavozelena': [
            '#002818', '#004030', '#006848', '#009068',
            '#00c890', '#00f0b0', '#40f0c0', '#70f8d0',
            '#90f8e0', '#b0f8e0', '#d0f8f0', '#e0fff8'
        ],
        'olivova': [
            '#182800', '#284800', '#407000', '#609800', 
            '#80d000', '#98f800', '#b0f848', '#c0f870',
            '#d0ff98', '#e0ffb0', '#e8ffc8', '#f0ffe0'
        ],
        'oranzova': [
            '#281800', '#482800', '#704800', '#986000',
            '#d08010', '#f8a010', '#f8b850', '#f8c878',
            '#ffd898', '#ffe0b0', '#ffe8c8', '#fff8e8'
        ],
        'tehlova': [
            '#280800', '#401800', '#682000', '#983000', 
            '#c84010', '#f04810', '#f07850', '#f89878',
            '#f8b898', '#f8c8b0', '#ffd8d0', '#ffe8e0'
        ],
    }

    constructor() {
        this.size = 30
        this.angle = 0;        
        this.weight = 1
        this.fg = '#000000';
        this.ink = true;      
        this.visible = true;

        this.ctx = new Canvas(canvas);
        this.home();
        this.cursor();
    }

    cursor() {
        if (this.sprite)
            this.sprite.remove();

        if (this.visible === true) {
            this.sprite = this.ctx.image(
                'turtle.svg', 
                this.x, this.y, 
                this.size, this.size, 
                this.angle
            );
        }
    }

    home() {
        this.x = this.ctx.width() / 2;
        this.y = this.ctx.height() / 2;
    }

    sleep(ms) {
        return new Promise(r => setTimeout(r, ms));
    }

    point(diameter) {
        this.ctx.circle(this.x, this.y, diameter / 2, this.fg);
    }

    move(steps) {
        const bx = 0;
        const by = -1;

        const angle = this.angle * (Math.PI / 180);
        const vx = bx * Math.cos(angle) - by * Math.sin(angle);
        const vy = bx * Math.sin(angle) + by * Math.cos(angle);

        const newX = this.x + steps * vx;
        const newY = this.y + steps * vy;
        const segments = this.ctx.wrapLine(
            this.x, this.y, newX, newY
        );

        if (this.ink) {
            for (const seg of segments) {
                this.ctx.line(
                    seg.x1, seg.y1,
                    seg.x2, seg.y2, 
                    this.fg, this.weight
                );
            }
        }
        this.x = Math.round(segments[segments.length - 1].x2);
        this.y = Math.round(segments[segments.length - 1].y2);
    }

    rotate(angle) {
        this.angle = (this.angle + angle) % 360;
    }

    headMove(pattern, code) {
        const arg = pattern.exec(code);
        if (!arg)
            return 0;
        else
            return arg[1].length;
    }

    argument(pattern, code) {
        const arg = pattern.exec(code);
        if (!arg) return; // err

        if (arg[1] === '?')
            return randint(10, 200);
        else
            return parseInt(arg[1]);
    }

    read(program) {
        let head = 0;
        const cmd = /^\s*(\w+)/;
        const num = /^\s*(-?\d+|\?)/;
        const hueReg = /^\s*"([A-Za-z]+)(\d*)?/;
        // [r g b]
        // [x y]

        while (true) {
            const match = cmd.exec(program.slice(head));
            if (!match)     // and end of string
                break;      // err
            const e = match[1];
            head += e.length;

            if (e == 'domov') {
                this.home()
            } else if (e == 'zmaz') {
                this.ctx.clear();
            } else if (e == 'znovu' || e == 'znova') {
                this.home();
                this.ctx.clear();
            } else if (e == 'ph' || e == 'perohore') {
                this.ink = false;
            } else if (e == 'pd' || e == 'perodole') {
                this.ink = true;
            } else if (e == 'skry') {
                this.visible = false;
            } else if (e == 'ukaz') {
                this.visible = true;
            } else if (e == 'do' || e == 'dopredu') {
                const leftover = program.slice(head);
                const arg = this.argument(num, leftover);
                head += this.headMove(num, leftover);
                this.move(arg);
            } else if (e == 'vz' || e == 'vzad') {
                const leftover = program.slice(head);
                const arg = this.argument(num, leftover);
                head += this.headMove(num, leftover);
                this.move(-arg);
            } else if (e == 'vp' || e == 'vpravo') {
                const leftover = program.slice(head);
                const arg = this.argument(num, leftover);
                head += this.headMove(num, leftover);
                this.rotate(arg);
            } else if (e == 'vl' || e == 'vlavo') {
                const leftover = program.slice(head);
                const arg = this.argument(num, leftover);
                head += this.headMove(num, leftover);
                this.rotate(-arg);
            } else if (e == 'bod') {
                const leftover = program.slice(head);
                const arg = this.argument(num, leftover);
                head += this.headMove(num, leftover);
                if (arg < 1)
                    break; // chyba
                this.point(arg);  
            } else if (e == 'nechhp' || e == 'nechhrubkapera') {
                const leftover = program.slice(head);
                const arg = this.argument(num, leftover);
                head += this.headMove(num, leftover);
                if (arg < 1)
                    break; // chyba
                this.weight = arg;
            } else if (e == 'nechfp' || e == 'nechfarbapera') {
                const leftover = program.slice(head);
                const arg = hueReg.exec(leftover);
                
                const hue = this.pallete[arg[1]];
                // pozor na ciernu, bielu
                if (!arg || hue == undefined)
                    return;   // err
                head += arg[0].length;

                let brightness = 0;
                if (arg[2] == undefined) {
                    brightness = 5;
                } else {
                    brightness = parseInt(arg[2]) - 1;
                    if (arg[2] >= 12)
                        break; // err
                }
                
                // ?
                // \s*\[\s*\d{1, 3}\s\d{0, 3}\s\d{0, 3}\s*\]
                
                this.fg = hue[brightness];
            } 
            this.cursor();
        }       
    }
}

class History {

    constructor() {
        this.history = new Array('');
        this.selected = this.history.length - 1;
    }

    previous() {
        if (this.selected > 0)
            this.selected--;
        return this.history[this.selected];
    }

    next() {
        if (this.selected < this.history.length - 1)
            this.selected++;
        return this.history[this.selected];
    }

    archive(command) {
        this.history[this.history.length - 1] = command;
        this.history.push('');
        this.selected = this.history.length - 1;
    }
}

function normalize(s) {
    return (s.normalize('NFD')
             .replace(/[\u0300-\u036f]/g, '')
             .toLowerCase());
}

function seekCaretEnd(input) {
    setTimeout(() => {
        const pos = input.value.length;
        input.setSelectionRange(pos, pos);
    }, 0);
}

function randint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

function intersection(a, v, b, w) {
    const parallel = w.x * v.y - w.y * v.x;
    if (parallel == 0)
        return null;

    let t = w.x * (b.y - a.y) - w.y * (b.x - a.x);
    t /= parallel;
    if (t < 0 || t > 1)
        return null;

    let s = -1;
    if (w.x != 0)
        s = (a.x + v.x * t - b.x) / w.x;
    else if (w.y != 0)
        s = (a.y + v.y * t - b.y) / w.y;
    else
        return null;

    if (s < 0 || s > 1)
        return null;

    return {
        x: a.x + v.x * t,
        y: a.y + v.y * t,
        t: t,
        s: s
    }
}

window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas');
    const command = document.getElementById('command');
    const log = document.getElementById('log');

    const turtle = new Turtle();
    const history = new History(); 
    
    command.addEventListener('keydown', event => {
        if (event.key == 'Enter') {
            const program = event.target.value;
            event.target.value = '';
            if (program) {
                turtle.read(normalize(program));
                log.value += `? ${program}\n`;
                log.scrollTop = log.scrollHeight;
                history.archive(program);
            }
        } else if (event.key == 'ArrowUp') {
            const command = history.previous();
            event.target.value = command;
            seekCaretEnd(event.target);

        } else if (event.key == 'ArrowDown') {
            const command = history.next();
            event.target.value = command;
            seekCaretEnd(event.target);
        }
    });   
});

