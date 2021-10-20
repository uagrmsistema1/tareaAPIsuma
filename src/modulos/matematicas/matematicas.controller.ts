import { Controller, Post, Body } from '@nestjs/common';
import { MatematicasService } from './matematicas.service';



@Controller('matematicas')
export class MatematicasController {

    constructor(private readonly matematicaService: MatematicasService){}

    @Post('/add')
    async suma(@Body() body: any){
        return this.matematicaService.add(body['n1'], body['n2']);
    }
}


