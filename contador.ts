class Contador {
    private valorContador: number = 0;

    zerar(): void {
        this.valorContador = 0;
    }

    incrementar(): void {
        this.valorContador += 1;
    }

    valor(): number {
        return this.valorContador;
    }
}
