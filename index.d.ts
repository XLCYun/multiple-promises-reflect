// Type definitions for [multiple-promises-reflect]
import { PReflectResolved } from "./index.d"
// Definitions by: [XLCYun@foxmail.com] <[https://github.com/XLCYun]>
declare function reflectOne<ResultData = any, ThrowError = Error>(
  promise: Promise<ResultData>,
  index: number,
  injectReflectIndexToPromiseItSelfAsWell: boolean
): MultiplePromisesReflect.PromiseReflectResult<ResultData>

declare function reflect<ResultData = any>(
  promise: Promise<ResultData>,
  injectReflectIndexToPromiseItSelfAsWell?: boolean
): MultiplePromisesReflect.PromiseReflectResult<ResultData>

declare function reflect<ResultData = any>(
  promise: Promise<ResultData>[],
  injectReflectIndexToPromiseItSelfAsWell?: boolean
): MultiplePromisesReflect.PromiseReflectResult<ResultData>[]

declare function reflect<ResultData = any>(
  promise: Promise<ResultData> | Promise<ResultData>[],
  injectReflectIndexToPromiseItSelfAsWell?: boolean
): MultiplePromisesReflect.PromiseReflectResult<ResultData> | MultiplePromisesReflect.PromiseReflectResult<ResultData>[]

export function isPReflectResolved<T extends PromiseReflectResult<any, any>>(res: T): res is PReflectResolved {
  return res.status === "resolved"
}

export function isPReflectRejected<T extends PromiseReflectResult<any, any>>(res: T): res is PReflectRejected {
  return res.status === "rejected"
}

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

export = reflect
