import { z } from "zod";

export const AddPropertySchema = z.object({
  propertyName: z.string().min(1, "Property name is required"),
  propertyType: z.enum(["apartment", "house", "condo", "townhouse"]).optional(),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z
    .string()
    .min(3, "Zip Code is required")
    .max(10, "Invalid Zip Code"),
  bedrooms: z.coerce.number().min(1, "Bedrooms must be 0 or more"),
  bathrooms: z.coerce.number().min(1, "Bathrooms must be 0 or more"),
  squareMeters: z.coerce.number().min(0, "Square Meters must be 0 or more"),
  yearBuilt: z.coerce.number().min(1800).max(new Date().getFullYear()),
  rentAmount: z.coerce.number().min(0, "Rent amount must be 0 or more"),
  depositAmount: z.coerce.number().min(0, "Deposit amount must be 0 or more"),
  description: z.string().optional(),
  furnished: z.boolean().optional(),
  petsAllowed: z.boolean().optional(),
  amenities: z
    .string()
    .transform((value) => value?.split(",").map((item) => item.trim()) || [])
    .optional(),
});

export const TenantSchema = z.object({
  tenantName: z.string().min(1, "Tenant name is required"),
  tenantEmail: z
    .string()
    .email("Invalid email address")
    .min(1, "Email is required"),
  tenantPhone: z
    .string()
    .regex(/^\d{10,15}$/, "Invalid phone number")
    .optional(),
  tenantID: z.string().min(5, "ID is required"),
  leaseStartDate: z.date().nullable(), // Permite que sea nulo o una fecha
  leaseEndDate: z.date().nullable().optional(), // Permite que sea opcional
  /*   emergencyContact: z
    .object({
      name: z.string().min(1, "Contact name is required"),
      relation: z.string().optional(),
      phone: z
        .string()
        .regex(/^\d{10,15}$/, "Invalid contact phone number")
        .optional(),
    })
    .optional(), */
});
