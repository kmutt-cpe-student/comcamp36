export interface paths {
  "/register": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["RegisterController_register"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/register/info": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations["RegisterController_registerInfo"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/register/files": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations["RegisterController_registerFile"];
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
    RegisterInfoPayloadDto: {
      fullname: string;
      age: number;
      /** Format: date */
      birth: string;
      religion: string;
      blood_group: string;
      graduation: string;
      school: string;
      course: string;
      telephone: string;
      email: string;
      medical_coverage: string;
      chronic_disease: string;
      self_medicine: string;
      drug_allergic: string;
      food_allergic: string;
      prefer_food: string;
      address: string;
      home_phone_tel: string;
      comcamp_attendance: boolean;
      size: string;
      everyday_attendence: boolean;
      has_laptop: boolean;
      travel: string;
      parent_fullname: string;
      parent_relation: string;
      parent_phone: string;
    };
    RegsiterFilesPayloadDto: {
      /** Format: binary */
      face_photo: File;
      /** Format: binary */
      thai_nationalid_copy: File;
      /** Format: binary */
      parent_permission: File;
      /** Format: binary */
      p1: File;
      /** Format: binary */
      p7: File;
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
  RegisterController_register: {
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
  RegisterController_registerInfo: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["RegisterInfoPayloadDto"];
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
  RegisterController_registerFile: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["RegsiterFilesPayloadDto"];
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
}
