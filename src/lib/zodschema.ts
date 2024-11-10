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

// Uso del esquema de validación
/* AddPropertySchema.parse({
  propertyName: "My Property",
  propertyType: "apartment",
  address: "123 Main St",
  city: "Sample City",
  state: "Sample State",
  zipCode: "12345",
  bedrooms: 2,
  bathrooms: 1,
  squareMeters: 1200,
  yearBuilt: 2005,
  rentAmount: 1500.0,
  depositAmount: 500.0,
  description: "A nice property with modern amenities.",
  furnished: true,
  petsAllowed: false,
  amenities: "Pool, Gym, Parking",
});
 */
