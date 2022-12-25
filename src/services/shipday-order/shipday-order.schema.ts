import { resolve } from '@feathersjs/schema'
import { Type, getDataValidator, getValidator, querySyntax, StringEnum } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../schemas/validators'
import { Order, orderSchema } from '../order/order.schema'

const OrderState = [
  "ACTIVE",
  "NOT_ASSIGNED",
  "NOT_ACCEPTED",
  "NOT_STARTED_YET",
  "STARTED",
  "PICKED_UP",
  "READY_TO_DELIVER",
  "ALREADY_DELIVERED",
  "FAILED_DELIVERY",
  "INCOMPLETE"
]
type OrderState = typeof OrderState;

const customerSchema = Type.Object({
  name: Type.String(),
  address: Type.String(),
  phoneNumber: Type.String(),
  emailAddress: Type.String(),
  latitude: Type.Number(),
  longitude: Type.Number()
})
const vendorSchema = Type.Object({
  "id": Type.Number(),
  "name": Type.String(),
  "address": Type.String(),
  "phoneNumber": Type.String(),
  "latitude": Type.Number(),
  "longitude": Type.Number()
})
const assignedCarrierSchema = Type.Object({
  id: Type.Integer(),
  "personalId": Type.Integer(),
  "name": Type.String(),
  "codeName": Type.String(),
  "phoneNumber": Type.String(),
  "companyId": Type.Integer(),
  "areaId": Type.Integer(),
  "isOnShift": Type.Boolean(),
  "email": Type.String(),
  "carrierPhoto": Type.String(),
  "isActive": Type.Boolean()  
})
const activityLogSchema = Type.Object({
  placementTime: Type.String({format: 'date-time'}),
  "expectedPickupTime": Type.String({format: 'time'}),
  "expectedDeliveryDate": Type.String({format: 'date'}),
  "expectedDeliveryTime": Type.String({format: 'time'}),
  "assignedTime": Type.String({format: 'date-time'}),
  "startTime": Type.String({format: 'date-time'}),
  "pickedUpTime": Type.String({format: 'date-time'}),
  "arrivedTime": Type.String({format: 'date-time'}),
  "deliveryTime": Type.String({format: 'date-time'})
})
const costingSchema = Type.Object({
  totalCost: Type.String({format: 'double'}),
  deliveryFee: Type.String({format: 'double'}),
  "tip": Type.String({format: 'double'}),
  "discountAmount": Type.String({format: 'double'}),
  "tax": Type.String({format: 'double'}),
  "cashTip": Type.String({format: 'double'})
})
const orderItemSchema = Type.Object({
  name: Type.String(),
  quantity: Type.String(),
  unit: Type.String({format: 'int32'}),
  addOns: Type.Array(Type.String()),
  details: Type.String()
})
const orderStatusSchema = Type.Object({
  imcomplete: Type.Boolean(),
  accepted: Type.Boolean(),
  orderState: StringEnum(Object.values(OrderState))
})

// Main data model schema
export const shipdayOrderSchema = Type.Object(
  {
    orderId: Type.Number(),
    orderNumber: Type.String(),
    companyId: Type.String(),
    areaId: Type.String(),
    customer: customerSchema,
    restaurant: vendorSchema,
    assignedCarrier: assignedCarrierSchema,
    distance: Type.String({format: 'double'}),
    activityLog: activityLogSchema,
    costing: costingSchema,
    orderItems: Type.Array(orderItemSchema),
    assignedCarrierId: Type.String({format: 'int32'}),
    orderStatus: orderStatusSchema,
    trackingLink: Type.String({format: 'uri'}),
    feedback: Type.String(),
    schedule: Type.Boolean(),
    parentId: Type.String({format: 'int32'}),
    etaTime: Type.String({format: 'time'}),
    deliveryInstruction:Type.String(),

  },
  { $id: 'ShipdayOrder', additionalProperties: false }
)
export type ShipdayOrder = Static<typeof shipdayOrderSchema>
export const shipdayOrderResolver = resolve<ShipdayOrder, HookContext>({
  properties: {}
})

export const shipdayOrderExternalResolver = resolve<ShipdayOrder, HookContext>({
  properties: {}
})

// Schema for creating new entries
export const shipdayOrderDataSchema = Type.Object({
  orderNumber: Type.String(),
  customerName: Type.String(),
  customerAddress: Type.String(),
  customerEmail: Type.String(),
  customerPhoneNumber: Type.String(),
  restaurantName: Type.String(),
  restaurantAddress: Type.String(),
  restaurantPhoneNumber: Type.Date({}),
  expectedDeliveryDate: Type.String({ format: 'date'}),
  expectedPickupTime: Type.String({ format: 'time'}),
  expectedDeliveryTime: Type.String({ format: 'time'}),
  pickupLatitude: Type.Number(),
  pickupLongitude: Type.Number(),
  deliveryLatitude: Type.Number(),
  deliveryLongitude: Type.Number(),
  tips: Type.Number(),
  tax: Type.Number(),
  discountAmount: Type.Number(),
  deliveryFee: Type.Number(),
  totalOrderCost: Type.Number(),
  deliveryInstruction: Type.String(),
  orderSource: Type.String(),
  additionalId: Type.String(),
  clientRestaurantId: Type.Number(),
  order: Type.Optional(Type.Ref(orderSchema))
},
{
  $id: 'ShipdayOrderData',
  additionalProperties: false
})
export type ShipdayOrderData = Static<typeof shipdayOrderDataSchema>
export const shipdayOrderDataValidator = getDataValidator(shipdayOrderDataSchema, dataValidator)
export const shipdayOrderDataResolver = resolve<ShipdayOrderData, HookContext>({
  properties: {}
})

export const shipdayOrderPatchSchema = Type.Object({
  orderId: Type.Number(),
  ...shipdayOrderDataSchema.properties
},
{
  $id: 'ShipdayOrderPatch',
  additionalProperties: false
})
export type ShipdayOrderPatch = Static<typeof shipdayOrderPatchSchema>
export const shipdayOrderPatchValidator = getDataValidator(shipdayOrderPatchSchema, dataValidator)
export const shipdayOrderPatchResolver = resolve<ShipdayOrderPatch, HookContext>({
  properties: {}
})

// Schema for allowed query properties
export const shipdayOrderQueryProperties = Type.Omit(shipdayOrderSchema, [], {
  additionalProperties: false
})
export const shipdayOrderQuerySchema = querySyntax(shipdayOrderQueryProperties)
export type ShipdayOrderQuery = Static<typeof shipdayOrderQuerySchema>
export const shipdayOrderQueryValidator = getValidator(shipdayOrderQuerySchema, queryValidator)
export const shipdayOrderQueryResolver = resolve<ShipdayOrderQuery, HookContext>({
  properties: {}
})
