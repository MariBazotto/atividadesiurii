class NumeroComplexo {
    private real: number;
    private imaginaria: number;

    constructor(real: number, imaginaria: number) {
        this.real = real;
        this.imaginaria = imaginaria;
    }

    getReal(): number {
        return this.real;
    }

    getImaginaria(): number {
        return this.imaginaria;
    }

    setReal(real: number): void {
        this.real = real;
    }

    setImaginaria(imaginaria: number): void {
        this.imaginaria = imaginaria;
    }

    somar(outroComplexo: NumeroComplexo): NumeroComplexo {
        return new NumeroComplexo(
            this.real + outroComplexo.getReal(),
            this.imaginaria + outroComplexo.getImaginaria()
        );
    }

    subtrair(outroComplexo: NumeroComplexo): NumeroComplexo {
        return new NumeroComplexo(
            this.real - outroComplexo.getReal(),
            this.imaginaria - outroComplexo.getImaginaria()
        );
    }

    multiplicar(outroComplexo: NumeroComplexo): NumeroComplexo {
        const real = this.real * outroComplexo.getReal() - this.imaginaria * outroComplexo.getImaginaria();
        const imaginaria = this.real * outroComplexo.getImaginaria() + this.imaginaria * outroComplexo.getReal();
        return new NumeroComplexo(real, imaginaria);
    }

    dividir(outroComplexo: NumeroComplexo): NumeroComplexo {
        const divisor = outroComplexo.getReal() * outroComplexo.getReal() + outroComplexo.getImaginaria() * outroComplexo.getImaginaria();
        const real = (this.real * outroComplexo.getReal() + this.imaginaria * outroComplexo.getImaginaria()) / divisor;
        const imaginaria = (this.imaginaria * outroComplexo.getReal() - this.real * outroComplexo.getImaginaria()) / divisor;
        return new NumeroComplexo(real, imaginaria);
    }

    equals(outroComplexo: NumeroComplexo): boolean {
        return this.real === outroComplexo.getReal() && this.imaginaria === outroComplexo.getImaginaria();
    }

    toString(): string {
        return (`${this.real}` + `${this.imaginaria}`);
    }

    modulo(): number {
        return Math.sqrt(this.real * this.real + this.imaginaria * this.imaginaria);
    }
}