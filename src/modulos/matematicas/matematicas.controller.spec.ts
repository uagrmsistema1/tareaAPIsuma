import { Test, TestingModule } from '@nestjs/testing';
import { MatematicasController } from './matematicas.controller';

describe('MatematicasController', () => {
  let controller: MatematicasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatematicasController],
    }).compile();

    controller = module.get<MatematicasController>(MatematicasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
