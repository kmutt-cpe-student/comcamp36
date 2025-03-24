export interface paths {
  "/": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["AppController_getHello"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/auth/me": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["AuthController_me"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/auth": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["AuthController_googleAuth"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/auth/google-redirect": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["AuthController_googleAuthRedirect"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/auth/logout": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations["AuthController_logout"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/files/upload-receipt": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations["FilesController_uploadReceipt"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/files/user-files": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["FilesController_getUserFiles"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/files/get-receipt": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations["FilesController_getReceipt"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/answer/user-regis": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["AnswerController_findRegisWithUser"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/answer/user-academic": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["AnswerController_findAcademicWithUser"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/confirmation/user-confirmation": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["ConfirmationController_getUserConfirmation"];
    put?: never;
    post: operations["ConfirmationController_updateUserConfirmation"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/confirmation/user-confirmation-info": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations["ConfirmationController_updateUserConfirmationInfo"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/confirmation/user-answer-confirmation": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations["ConfirmationController_createUserAnswerConfirmation"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    UserResponseDto: {
      id: string;
      title: string;
      email: string;
      fullname: string;
      age: number;
      birth: string;
      gender: string;
      religion: string;
      blood_group: string;
      graduation: string;
      school: string;
      course: string;
      telephone: string;
      medical_coverage: string;
      chronic_disease: string;
      self_medicine: string;
      drug_allergic: string;
      food_allergic: string;
      prefer_food: string;
      address: string;
      home_phone_tel: string;
      comcamp_attendance: boolean;
      shirt_size: string;
      everyday_attendance: boolean;
      has_laptop: boolean;
      travel: string;
      parent_fullname: string;
      parent_relation: string;
      parent_phone: string;
      files_done: boolean;
      academic_done: boolean;
      regis_done: boolean;
      info_done: boolean;
      has_submit_answer: boolean;
    };
    UploadReceiptResponseDto: {
      receipt_key: string;
    };
    UserFilesResponseDto: {
      face_photo: {
        name?: string;
        url?: string;
      };
      thai_nationalid_copy: {
        name?: string;
        url?: string;
      };
      parent_permission: {
        name?: string;
        url?: string;
      };
      p1: {
        name?: string;
        url?: string;
      };
      p7: {
        name?: string;
        url?: string;
      };
    };
    GetReceiptFileDto: {
      receipt_key: string;
    };
    ReceiptFileResponseDto: {
      receipt_path: string;
    };
    AnswerRegisResponseDto: {
      id: string;
      answer1: string;
      answer2: string;
      answer3: string;
      answer4: string;
      answer5: string;
      answer6_1: string;
      answer6_2: string;
    };
    AnswerAcademicResponseDto: {
      id: string;
      algo_answer: string;
      chess_notation: string;
      chess_score: number;
    };
    Confirm: {
      user_id: string;
      index: number;
      gender: string;
      fullname: string;
      nickname: string;
      request_food: string;
      haveIpad: boolean;
      haveMouse: boolean;
      os_notebook: string;
      travel: string;
      receipt_path: string;
      receipt_datetime: string;
      confirmation_status: string;
      isAnswerDone: string;
      isInfoDone: string;
      isConfirmDone: string;
    };
    ConfirmResponseDto: {
      isPassed: boolean;
      confirm: components["schemas"]["Confirm"];
    };
    UpdateConfirmInfoDto: {
      nickname: string;
      request_food: string;
      haveIpad: boolean;
      haveMouse: boolean;
      os_notebook: string;
      travel: string;
      receipt_datetime: string;
    };
    UpdateConfirmDto: {
      confirmation_status: string;
    };
    CreateAnswerConfirmDto: {
      question1: number;
      question2: number;
      question3: number;
      question4: number;
      question5: number;
      question6: number;
      question7: number;
      question8: number;
      question9: number;
      question10: number;
      question11: number;
      question12: number;
      question13: number;
      question14: number;
      question15: number;
      question16: number;
      question17: number;
      question18: number;
      question19: number;
      question20: number;
      question21: number;
      question22: number;
      question23: number;
      question24: number;
      question25: number;
      question26: number;
      question27: number;
      question28: number;
      question29: number;
      question30: number;
    };
    AnswerConfirmResponseDto: {
      user_id: string;
      question1: number;
      question2: number;
      question3: number;
      question4: number;
      question5: number;
      question6: number;
      question7: number;
      question8: number;
      question9: number;
      question10: number;
      question11: number;
      question12: number;
      question13: number;
      question14: number;
      question15: number;
      question16: number;
      question17: number;
      question18: number;
      question19: number;
      question20: number;
      question21: number;
      question22: number;
      question23: number;
      question24: number;
      question25: number;
      question26: number;
      question27: number;
      question28: number;
      question29: number;
      question30: number;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  AppController_getHello: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AuthController_me: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UserResponseDto"];
        };
      };
    };
  };
  AuthController_googleAuth: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AuthController_googleAuthRedirect: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AuthController_logout: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      201: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  FilesController_uploadReceipt: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          /** Format: binary */
          file?: File;
        };
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UploadReceiptResponseDto"];
        };
      };
    };
  };
  FilesController_getUserFiles: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["UserFilesResponseDto"];
        };
      };
    };
  };
  FilesController_getReceipt: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["GetReceiptFileDto"];
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ReceiptFileResponseDto"];
        };
      };
    };
  };
  AnswerController_findRegisWithUser: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["AnswerRegisResponseDto"];
        };
      };
    };
  };
  AnswerController_findAcademicWithUser: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["AnswerAcademicResponseDto"];
        };
      };
    };
  };
  ConfirmationController_getUserConfirmation: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["ConfirmResponseDto"];
        };
      };
    };
  };
  ConfirmationController_updateUserConfirmation: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateConfirmDto"];
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Confirm"];
        };
      };
    };
  };
  ConfirmationController_updateUserConfirmationInfo: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateConfirmInfoDto"];
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["Confirm"];
        };
      };
    };
  };
  ConfirmationController_createUserAnswerConfirmation: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateAnswerConfirmDto"];
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": components["schemas"]["AnswerConfirmResponseDto"];
        };
      };
    };
  };
}
