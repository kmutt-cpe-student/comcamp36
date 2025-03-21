export class ConfirmResponseDto {
  user_id: string;
  index: string;
  fullname: string;
  nickname?: string;
  request_food?: string;
  Ipad?: boolean;
  os_notebook?: string;
  travel?: string;
  receipt_path?: string;
  receipt_datetime?: Date;
  confirmation_status: string;
  isAnswerDone?: Date;
  isConfirmDone?: Date;
}
