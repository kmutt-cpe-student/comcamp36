import { Test, TestingModule } from '@nestjs/testing';
import { ConfirmationController } from './confirmation.controller';
import { ConfirmationService } from './confirmation.service';

describe('ConfirmationController', () => {
  let controller: ConfirmationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConfirmationController],
      providers: [ConfirmationService],
    }).compile();

    controller = module.get<ConfirmationController>(ConfirmationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
