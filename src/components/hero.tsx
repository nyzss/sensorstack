import HeroIllustration from "@/assets/hero.svg";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { newsletterSchema, supabase } from "@/lib/sb";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "./ui/button";

export default function Hero() {
    const form = useForm<z.infer<typeof newsletterSchema>>({
        resolver: zodResolver(newsletterSchema),
        defaultValues: {
            email: "",
        },
    });

    const handleSubmit = async (values: z.infer<typeof newsletterSchema>) => {
        console.log(values);

        const { error } = await supabase.from("emails").insert({
            email: values.email,
        });

        if (error) {
            if (error.code === "23505") {
                return toast.error("Email already subscribed!");
            }
            return toast.error("Failed to subscribe!");
        }

        return toast.success("Subscribed successfully!", {
            description: `${values.email} has been subscribed to our newsletter`,
        });
    };

    return (
        <section className="pt-12 pb-12 sm:pb-24 lg:pt-16">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                    <div>
                        <div className="text-center lg:text-left space-y-4">
                            <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-4xl sm:leading-tight lg:leading-tight lg:text-5xl font-pj">
                                <span className="text-emerald-500 dark:text-emerald-400">
                                    IoT Intelligence
                                </span>{" "}
                                Platform with Industry Dataset Marketplace
                            </h1>
                            <p className="mt-2 text-lg text-muted-foreground sm:mt-8 font-inter">
                                Transform sensor data into predictive insights -
                                access industry-specific datasets to supercharge
                                your ML models
                            </p>
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(handleSubmit)}
                                    className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-2 sm:mr-12 justify-center items-start"
                                >
                                    <div className="flex-1 w-full">
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <div className="relative p-2 sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900">
                                                            <input
                                                                type="email"
                                                                placeholder="Enter your email address"
                                                                className="block w-full px-3 py-2 text-foreground placeholder-foreground bg-transparent border border-accent-foreground outline-none focus:border-background focus:ring-1 focus:ring-background rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent"
                                                                {...field}
                                                            />
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        size={"lg"}
                                        className="sm:py-7 sm:px-4 text-lg self-center"
                                    >
                                        Subscribe
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </div>

                    <div>
                        <img
                            className="w-full"
                            src={HeroIllustration}
                            alt="hero illustration"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
