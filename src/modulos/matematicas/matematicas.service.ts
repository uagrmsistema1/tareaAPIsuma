import { Injectable } from '@nestjs/common';

@Injectable()
export class MatematicasService {

    add(n1: number, n2: number) {
        return { "result": n1 + n2 };
    }
}
