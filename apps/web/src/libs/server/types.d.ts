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
  "/users": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["UsersController_findAll"];
    put?: never;
    post: operations["UsersController_create"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/users/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["UsersController_findOne"];
    put?: never;
    post?: never;
    delete: operations["UsersController_remove"];
    options?: never;
    head?: never;
    patch: operations["UsersController_update"];
    trace?: never;
  };
  "/users/info": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations["UsersController_updateRegister"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/files/upload": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations["FilesController_uploadFile"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/files/getblobs": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations["FilesController_getBlobs"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/files/geturl": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations["FilesController_getFiles"];
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
  "/answer/regis": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["AnswerController_findAllRegis"];
    put?: never;
    post: operations["AnswerController_createRegis"];
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
    post: operations["AnswerController_upsertRegisWithUser"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/answer/regis/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["AnswerController_findOneRegis"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch: operations["AnswerController_updateRegis"];
    trace?: never;
  };
  "/answer/academic": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["AnswerController_findAllAcademic"];
    put?: never;
    post: operations["AnswerController_createAcademic"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/answer/academic/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["AnswerController_findAcademic"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch: operations["AnswerController_updateAcademic"];
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
    post: operations["AnswerController_upsertAcademicWithUser"];
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
      birth: number;
      gender: string;
      religion: string;
      blood_group: string;
      graduation: string;
      school: string;
      course: string;
      telephone: string;
      medical_coverage: string;
      chronic_diseas: string;
      self_medicine: string;
      drug_allergic: string;
      food_allergic: string;
      perfer_food: string;
      address: string;
      home_phone_tel: string;
      comcamp_attendance: boolean;
      shirt_size: string;
      everyday_attendence: boolean;
      has_laptop: boolean;
      travel: string;
      parent_fullname: string;
      parent_relation: string;
      parent_phone: string;
      files_done: boolean;
      academic_done: boolean;
      regis_done: boolean;
      info_done: boolean;
    };
    CreateUserDto: {
      google_id: string;
      email: string;
    };
    UpdateUserDto: {
      title?: string;
      fullname?: string;
      age?: number;
      birth?: number;
      gender?: string;
      religion?: string;
      blood_group?: string;
      graduation?: string;
      school?: string;
      course?: string;
      telephone?: string;
      medical_coverage?: string;
      chronic_diseas?: string;
      self_medicine?: string;
      drug_allergic?: string;
      food_allergic?: string;
      prefer_food?: string;
      address?: string;
      home_phone_tel?: string;
      comcamp_attendance?: boolean;
      everyday_attendence?: boolean;
      has_laptop?: boolean;
      travel?: string;
      parent_fullname?: string;
      parent_relation?: string;
      parent_phone?: string;
    };
    GetUrlFileInputDto: {
      face_photo_key?: string;
      thai_nationalid_copy_key?: string;
      parent_permission_key?: string;
      p1_key?: string;
      p7_key?: string;
    };
    UserFilesResponseDto: {
      id: string;
      face_photo_filepath: string;
      thai_nationalid_copy_filepath: string;
      parent_permission_filepath: string;
      p1_filepath: string;
      p7_filepath: string;
    };
    CreateAnswerRegisDto: {
      userId: string;
      answer1: string;
      answer2: string;
      answer3: string;
      answer4: string;
      answer5: string;
      answer6_1: string;
      answer6_2: string;
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
    UpdateAnswerRegisDto: {
      answer1?: string;
      answer2?: string;
      answer3?: string;
      answer4?: string;
      answer5?: string;
      answer6_1?: string;
      answer6_2?: string;
    };
    UpsertAnswerRegisDto: {
      answer1: string;
      answer2: string;
      answer3: string;
      answer4: string;
      answer5: string;
      answer6_1: string;
      answer6_2: string;
    };
    CreateAnswerAcademicDto: {
      userId: string;
      algo_answer: string;
      chess_notation: string;
      chess_score: number;
    };
    AnswerAcademicResponseDto: {
      id: string;
      algo_answer: string;
      chess_notation: string;
      chess_score: number;
    };
    UpsertAnswerAcademicDto: {
      algo_answer: string;
      chess_notation: string;
      chess_score: number;
    };
    UpdateAnswerAcademicDto: {
      algo_answer?: string;
      chess_notation?: string;
      chess_score?: number;
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
  UsersController_findAll: {
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
  UsersController_create: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateUserDto"];
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  UsersController_findOne: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
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
  UsersController_remove: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
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
  UsersController_update: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateUserDto"];
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  UsersController_updateRegister: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateUserDto"];
      };
    };
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
  FilesController_uploadFile: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "multipart/form-data": {
          /** Format: binary */
          face_photo?: File;
          /** Format: binary */
          thai_nationalid_copy?: File;
          /** Format: binary */
          parent_permission?: File;
          /** Format: binary */
          p1?: File;
          /** Format: binary */
          p7?: File;
        };
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  FilesController_getBlobs: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["GetUrlFileInputDto"];
      };
    };
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
  FilesController_getFiles: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["GetUrlFileInputDto"];
      };
    };
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
  AnswerController_findAllRegis: {
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
  AnswerController_createRegis: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateAnswerRegisDto"];
      };
    };
    responses: {
      201: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
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
  AnswerController_upsertRegisWithUser: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpsertAnswerRegisDto"];
      };
    };
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
  AnswerController_findOneRegis: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
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
  AnswerController_updateRegis: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateAnswerRegisDto"];
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AnswerController_findAllAcademic: {
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
  AnswerController_createAcademic: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateAnswerAcademicDto"];
      };
    };
    responses: {
      201: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  AnswerController_findAcademic: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
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
  AnswerController_updateAcademic: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        id: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateAnswerAcademicDto"];
      };
    };
    responses: {
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
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
  AnswerController_upsertAcademicWithUser: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpsertAnswerAcademicDto"];
      };
    };
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
}
