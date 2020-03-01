// Type definitions for [multiple-promises-reflect]
// Definitions by: [XLCYun@foxmail.com] <[https://github.com/XLCYun]>

declare function reflectOne<ResultData = any, ThrowError = Error>(
  promise: Promise<ResultData>,
  index: number,
  injectReflectIndexToPromiseItSelfAsWell: boolean
): Promise<reflect.PromiseReflectResult<ResultData>>

declare function reflect<ResultData = any>(
  promise: Promise<ResultData>,
  injectReflectIndexToPromiseItSelfAsWell?: boolean
): Promise<reflect.PromiseReflectResult<ResultData>>

declare function reflect<ResultData = any>(
  promise: Promise<ResultData>[],
  injectReflectIndexToPromiseItSelfAsWell?: boolean
): Promise<reflect.PromiseReflectResult<ResultData>[]>

declare function reflect<ResultData = any>(
  promise: Promise<ResultData> | Promise<ResultData>[],
  injectReflectIndexToPromiseItSelfAsWell?: boolean
): Promise<reflect.PromiseReflectResult<ResultData> | reflect.PromiseReflectResult<ResultData>[]>

declare namespace reflect {
  export interface PReflectResolved<ResultData = any> {
    data: ResultData
    status: "resolved"
    index: number | undefined
  }

  export interface PReflectRejected<RejectedObject = Error> {
    error: RejectedObject
    status: "rejected"
    index: number | undefined
  }

  export type PromiseReflectResult<ResultData = any, RejectedObject = Error> =
    | PReflectResolved<ResultData>
    | PReflectRejected<RejectedObject>
}

export = reflect
