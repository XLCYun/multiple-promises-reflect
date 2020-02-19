// Type definitions for [multiple-promises-reflect]
// Definitions by: [XLCYun@foxmail.com] <[https://github.com/XLCYun]>
declare function reflectOne<ResultData = any, ThrowError = Error>(
  promise: Promise<ResultData>,
  index: number,
  injectReflectIndexToPromiseItSelfAsWell
): MultiplePromisesReflect.PromiseReflectResult<ResultData>

declare function reflect<ResultData = any>(
  promise: Promise<ResultData> | Promise<ResultData>[],
  injectReflectIndexToPromiseItSelfAsWell: boolean
): MultiplePromisesReflect.PromiseReflectResult<ResultData> | MultiplePromisesReflect.PromiseReflectResult<ResultData>[]

declare namespace MultiplePromisesReflect {
  export type PromiseReflectStatus = "resolved" | "rejected"

  export interface PromiseReflectResult<ResultData, ThrowError = Error> {
    data?: ResultData
    error: ThrowError
    status: PromiseReflectStatus
    index: number | undefined
  }
}

export = reflect
