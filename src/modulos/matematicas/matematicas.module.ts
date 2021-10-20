import { Module } from '@nestjs/common';
import { MatematicasController } from './matematicas.controller';
import { MatematicasService } from './matematicas.service';

@Module({
  controllers: [MatematicasController],
  providers: [MatematicasService]
})
export class MatematicasModule {}
