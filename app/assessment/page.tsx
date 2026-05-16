"use client"

import { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Building2,
  Users,
  Shield,
  Cloud,
  Network,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { industries, solutions } from "@/lib/content"

const assessmentSchema = z.object({
  // Step 1: Contact Info
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  company: z.string().min(2, "Company name is required"),
  jobTitle: z.string().min(2, "Job title is required"),
  // Step 2: Company Info
  industry: z.string().min(1, "Please select an industry"),
  companySize: z.string().min(1, "Please select company size"),
  // Step 3: Needs
  challenges: z.array(z.string()).min(1, "Please select at least one challenge"),
  timeline: z.string().min(1, "Please select a timeline"),
  // Step 4: Additional
  message: z.string().optional(),
})

type AssessmentFormData = z.infer<typeof assessmentSchema>

const steps = [
  { id: 1, title: "Contact Information", icon: Users },
  { id: 2, title: "Company Details", icon: Building2 },
  { id: 3, title: "Your Needs", icon: Shield },
  { id: 4, title: "Additional Info", icon: CheckCircle },
]

const companySizes = [
  "1-50 employees",
  "51-200 employees",
  "201-500 employees",
  "501-1000 employees",
  "1000+ employees",
]

const challenges = [
  { key: "cybersecurity", label: "Cybersecurity & Threat Protection", icon: Shield },
  { key: "cloud", label: "Cloud Infrastructure & Migration", icon: Cloud },
  { key: "network", label: "Network Performance & Security", icon: Network },
  { key: "compliance", label: "Regulatory Compliance", icon: Building2 },
  { key: "managed", label: "IT Operations & Support", icon: Users },
]

const timelines = [
  "Immediate (within 1 month)",
  "Short-term (1-3 months)",
  "Medium-term (3-6 months)",
  "Long-term planning (6+ months)",
]

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
    trigger,
  } = useForm<AssessmentFormData>({
    resolver: zodResolver(assessmentSchema),
    mode: "onChange",
    defaultValues: {
      challenges: [],
    },
  })

  const watchedChallenges = watch("challenges") || []

  const toggleChallenge = (key: string) => {
    const current = watchedChallenges
    if (current.includes(key)) {
      setValue(
        "challenges",
        current.filter((c) => c !== key),
        { shouldValidate: true }
      )
    } else {
      setValue("challenges", [...current, key], { shouldValidate: true })
    }
  }

  const nextStep = async () => {
    let fieldsToValidate: (keyof AssessmentFormData)[] = []

    switch (currentStep) {
      case 1:
        fieldsToValidate = [
          "firstName",
          "lastName",
          "email",
          "phone",
          "company",
          "jobTitle",
        ]
        break
      case 2:
        fieldsToValidate = ["industry", "companySize"]
        break
      case 3:
        fieldsToValidate = ["challenges", "timeline"]
        break
    }

    const isStepValid = await trigger(fieldsToValidate)
    if (isStepValid && currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const onSubmit = (data: AssessmentFormData) => {
    console.log("Assessment submitted:", data)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center p-8 lg:p-12 rounded-3xl bg-card border border-border"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-4">
              Thank You for Your Submission!
            </h1>
            <p className="text-muted-foreground mb-8">
              Our team will review your assessment and get back to you within 24
              hours with personalized recommendations for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/">Return Home</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 sgi-gradient" />
        <div className="absolute inset-0 sgi-gradient-radial" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Free Assessment
            </span>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mt-3 mb-6">
              Get Your Personalized{" "}
              <span className="sgi-text-gradient">IT Assessment</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Answer a few questions and our experts will provide tailored
              recommendations for your organization&apos;s IT security and
              infrastructure needs.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex items-center justify-between">
                {steps.map((step, i) => {
                  const Icon = step.icon
                  const isActive = currentStep === step.id
                  const isCompleted = currentStep > step.id
                  return (
                    <div
                      key={step.id}
                      className="flex items-center flex-1 last:flex-none"
                    >
                      <div className="flex flex-col items-center">
                        <div
                          className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center transition-all",
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : isCompleted
                                ? "bg-primary/20 text-primary"
                                : "bg-muted text-muted-foreground"
                          )}
                        >
                          {isCompleted ? (
                            <CheckCircle className="w-6 h-6" />
                          ) : (
                            <Icon className="w-6 h-6" />
                          )}
                        </div>
                        <span
                          className={cn(
                            "text-xs mt-2 hidden sm:block",
                            isActive
                              ? "text-primary font-medium"
                              : "text-muted-foreground"
                          )}
                        >
                          {step.title}
                        </span>
                      </div>
                      {i < steps.length - 1 && (
                        <div
                          className={cn(
                            "flex-1 h-1 mx-4 rounded-full",
                            isCompleted ? "bg-primary/50" : "bg-muted"
                          )}
                        />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="p-6 lg:p-10 rounded-3xl bg-card border border-border">
                <AnimatePresence mode="wait">
                  {/* Step 1: Contact Information */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold mb-6">
                        Contact Information
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            First Name *
                          </label>
                          <Input
                            {...register("firstName")}
                            placeholder="John"
                            className={errors.firstName ? "border-destructive" : ""}
                          />
                          {errors.firstName && (
                            <p className="text-sm text-destructive mt-1">
                              {errors.firstName.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Last Name *
                          </label>
                          <Input
                            {...register("lastName")}
                            placeholder="Doe"
                            className={errors.lastName ? "border-destructive" : ""}
                          />
                          {errors.lastName && (
                            <p className="text-sm text-destructive mt-1">
                              {errors.lastName.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Work Email *
                          </label>
                          <Input
                            {...register("email")}
                            type="email"
                            placeholder="john@company.com"
                            className={errors.email ? "border-destructive" : ""}
                          />
                          {errors.email && (
                            <p className="text-sm text-destructive mt-1">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Phone Number *
                          </label>
                          <Input
                            {...register("phone")}
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            className={errors.phone ? "border-destructive" : ""}
                          />
                          {errors.phone && (
                            <p className="text-sm text-destructive mt-1">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Company Name *
                          </label>
                          <Input
                            {...register("company")}
                            placeholder="Company Inc."
                            className={errors.company ? "border-destructive" : ""}
                          />
                          {errors.company && (
                            <p className="text-sm text-destructive mt-1">
                              {errors.company.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Job Title *
                          </label>
                          <Input
                            {...register("jobTitle")}
                            placeholder="IT Director"
                            className={errors.jobTitle ? "border-destructive" : ""}
                          />
                          {errors.jobTitle && (
                            <p className="text-sm text-destructive mt-1">
                              {errors.jobTitle.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Company Details */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold mb-6">Company Details</h2>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium mb-3">
                            Industry *
                          </label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {industries.map((industry) => {
                              const Icon = industry.icon
                              const isSelected =
                                watch("industry") === industry.key
                              return (
                                <button
                                  key={industry.key}
                                  type="button"
                                  onClick={() =>
                                    setValue("industry", industry.key, {
                                      shouldValidate: true,
                                    })
                                  }
                                  className={cn(
                                    "p-4 rounded-xl border text-left transition-all",
                                    isSelected
                                      ? "bg-primary/10 border-primary text-primary"
                                      : "bg-muted/50 border-border hover:border-primary/50"
                                  )}
                                >
                                  <Icon className="w-5 h-5 mb-2" />
                                  <span className="text-sm font-medium">
                                    {industry.shortTitle}
                                  </span>
                                </button>
                              )
                            })}
                          </div>
                          {errors.industry && (
                            <p className="text-sm text-destructive mt-2">
                              {errors.industry.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-3">
                            Company Size *
                          </label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {companySizes.map((size) => {
                              const isSelected = watch("companySize") === size
                              return (
                                <button
                                  key={size}
                                  type="button"
                                  onClick={() =>
                                    setValue("companySize", size, {
                                      shouldValidate: true,
                                    })
                                  }
                                  className={cn(
                                    "p-4 rounded-xl border text-center transition-all",
                                    isSelected
                                      ? "bg-primary/10 border-primary text-primary"
                                      : "bg-muted/50 border-border hover:border-primary/50"
                                  )}
                                >
                                  <span className="text-sm font-medium">
                                    {size}
                                  </span>
                                </button>
                              )
                            })}
                          </div>
                          {errors.companySize && (
                            <p className="text-sm text-destructive mt-2">
                              {errors.companySize.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Your Needs */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold mb-6">Your Needs</h2>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium mb-3">
                            What challenges are you facing? (Select all that
                            apply) *
                          </label>
                          <div className="space-y-3">
                            {challenges.map((challenge) => {
                              const Icon = challenge.icon
                              const isSelected = watchedChallenges.includes(
                                challenge.key
                              )
                              return (
                                <button
                                  key={challenge.key}
                                  type="button"
                                  onClick={() => toggleChallenge(challenge.key)}
                                  className={cn(
                                    "w-full p-4 rounded-xl border flex items-center gap-4 text-left transition-all",
                                    isSelected
                                      ? "bg-primary/10 border-primary"
                                      : "bg-muted/50 border-border hover:border-primary/50"
                                  )}
                                >
                                  <div
                                    className={cn(
                                      "w-10 h-10 rounded-lg flex items-center justify-center",
                                      isSelected
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-muted"
                                    )}
                                  >
                                    <Icon className="w-5 h-5" />
                                  </div>
                                  <span className="font-medium">
                                    {challenge.label}
                                  </span>
                                  {isSelected && (
                                    <CheckCircle className="w-5 h-5 text-primary ml-auto" />
                                  )}
                                </button>
                              )
                            })}
                          </div>
                          {errors.challenges && (
                            <p className="text-sm text-destructive mt-2">
                              {errors.challenges.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-3">
                            What is your timeline? *
                          </label>
                          <div className="grid md:grid-cols-2 gap-3">
                            {timelines.map((timeline) => {
                              const isSelected = watch("timeline") === timeline
                              return (
                                <button
                                  key={timeline}
                                  type="button"
                                  onClick={() =>
                                    setValue("timeline", timeline, {
                                      shouldValidate: true,
                                    })
                                  }
                                  className={cn(
                                    "p-4 rounded-xl border text-left transition-all",
                                    isSelected
                                      ? "bg-primary/10 border-primary text-primary"
                                      : "bg-muted/50 border-border hover:border-primary/50"
                                  )}
                                >
                                  <span className="text-sm font-medium">
                                    {timeline}
                                  </span>
                                </button>
                              )
                            })}
                          </div>
                          {errors.timeline && (
                            <p className="text-sm text-destructive mt-2">
                              {errors.timeline.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Additional Info */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold mb-6">
                        Additional Information
                      </h2>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Anything else you&apos;d like us to know? (Optional)
                        </label>
                        <textarea
                          {...register("message")}
                          rows={5}
                          placeholder="Tell us more about your specific needs, current infrastructure, or any questions you have..."
                          className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                        />
                      </div>
                      <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
                        <p className="text-sm text-muted-foreground">
                          By submitting this form, you agree to our{" "}
                          <Link
                            href="/privacy"
                            className="text-primary hover:underline"
                          >
                            Privacy Policy
                          </Link>{" "}
                          and consent to being contacted by our team.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                  {currentStep < 4 ? (
                    <Button type="button" onClick={nextStep}>
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button type="submit" className="sgi-glow">
                      Submit Assessment
                      <CheckCircle className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
