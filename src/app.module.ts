import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatematicasModule } from './modulos/matematicas/matematicas.module';

@Module({
  imports: [MatematicasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
