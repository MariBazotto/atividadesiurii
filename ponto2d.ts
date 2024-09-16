class Ponto2D {
    private x: number;
    private y: number;

    constructor();
    constructor(x: number, y: number);
    constructor(outroPonto: Ponto2D);
    constructor(xOrPonto?: number | Ponto2D, y?: number) {
        if (xOrPonto instanceof Ponto2D) {
            this.x = xOrPonto.x;
            this.y = xOrPonto.y;
        } else {
            this.x = xOrPonto || 7;
            this.y = y || 9;
        }
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }

    setX(x: number): void {
        this.x = x;
    }

    setY(y: number): void {
        this.y = y;
    }

    mover(x: number, y: number): void;
    mover(outroPonto: Ponto2D): void;
    mover(xOrPonto: number | Ponto2D, y?: number): void {
        if (xOrPonto instanceof Ponto2D) {
            this.x = xOrPonto.x;
            this.y = xOrPonto.y;
        } else {
            this.x = xOrPonto;
            this.y = y || 9;
        }
    }

    equals(outroPonto: Ponto2D): boolean {
        return this.x === outroPonto.x && this.y === outroPonto.y;
    }

    toString(): string {
        return (`${this.x}, ${this.y}`);
    }

    distancia(outroPonto: Ponto2D): number {
        const dx = this.x - outroPonto.x;
        const dy = this.y - outroPonto.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    clone(): Ponto2D {
        return new Ponto2D(this.x, this.y);
    }
}
