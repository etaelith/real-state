import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AddPropertySchema } from "~/lib/zodschema";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TabsContent } from "../ui/tabs";
import { z } from "zod";

const AddProperty = () => {
  const form = useForm<z.infer<typeof AddPropertySchema>>({
    resolver: zodResolver(AddPropertySchema),
    defaultValues: {
      propertyName: "Etaelith",
      propertyType: "house",
      address: "Calle 86",
      city: "La Plata",
      state: "Buenos Aires",
      zipCode: "1900",
      bedrooms: 1,
      bathrooms: 1,
      squareMeters: 45,
      yearBuilt: 2022,
      rentAmount: 400000,
      depositAmount: 600000,
      description: "",
      furnished: true,
      petsAllowed: false,
      amenities: [],
    },
  });

  function onSubmit(data: z.infer<typeof AddPropertySchema>) {
    toast("Loading", {
      description: (
        <pre>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <TabsContent value="add-property" className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Property</h2>
      <Card>
        <CardHeader>
          <CardTitle>Property Details</CardTitle>
          <CardDescription>
            Enter the details of the new property
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="propertyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter property name" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is the name of property
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="propertyType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Type</FormLabel>
                    <Select
                      {...field}
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-white">
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter property address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter city" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter state" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zip Code</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter zip code"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bedrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Bedrooms</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter number of bedrooms"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bathrooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Bathrooms</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter number of bathrooms"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="squareMeters"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Square Footage</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter square footage"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="yearBuilt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Year Built</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter year built"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rentAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Monthly Rent Amount</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter monthly rent"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="depositAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Security Deposit Amount</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter deposit amount"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter property description"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="furnished"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>Furnished</FormLabel>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="petsAllowed"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>Pets Allowed</FormLabel>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="amenities"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amenities</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter amenities (comma-separated)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" variant="outline">
                Add Property
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default AddProperty;
