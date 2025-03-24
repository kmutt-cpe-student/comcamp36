import { Test, TestingModule } from '@nestjs/testing';
import { ConfirmationService } from './confirmation.service';

describe('ConfirmationService', () => {
  let service: ConfirmationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfirmationService],
    }).compile();

    service = module.get<ConfirmationService>(ConfirmationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
