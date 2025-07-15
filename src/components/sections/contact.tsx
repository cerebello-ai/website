import React from 'react';

import Link from 'next/link';

import { Facebook, Linkedin, Twitter } from 'lucide-react';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

const formFields = [
  {
    label: 'Full name',
    name: 'fullName',
    placeholder: 'First and last name',
    type: 'text',
  },
  {
    label: 'Work email address',
    name: 'email',
    placeholder: 'me@company.com',
    type: 'email',
  },
  {
    label: 'Company name',
    name: 'company',
    placeholder: 'Company name',
    type: 'text',
    optional: true,
  },
  {
    label: 'Number of employees',
    name: 'employees',
    placeholder: 'e.g., 50-200',
    type: 'text',
    optional: true,
  },
  {
    label: 'Industry',
    name: 'industry',
    placeholder: 'e.g., Manufacturing, Healthcare, Finance',
    type: 'text',
    optional: true,
  },
  {
    label: 'How can we help you?',
    name: 'helpType',
    placeholder: 'e.g., AI Implementation Scan, Process Automation, Strategic Consulting',
    type: 'text',
    optional: true,
  },
  {
    label: 'Your message',
    name: 'message',
    placeholder: 'Write your message',
    type: 'textarea',
  },
];

export default function Contact() {
  return (
    <section className="py-16 md:py-28 lg:py-32">
      <div className="container max-w-4xl">
        <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Contact Cerebello
        </h1>
        <p className="text-muted-foreground mt-4 text-center">
          Ready to transform your business with AI-powered automation? Get in touch with our team of experts.
        </p>

        <div className="mt-8 flex max-md:flex-col md:mt-12 md:divide-x lg:mt-20">
          {/* Contact Information */}
          <div className="space-y-10 md:pe-14">
            <div>
              <h2 className="text-lg font-semibold">Netherlands Office</h2>
              <p className="text-muted-foreground mt-3 text-lg font-medium tracking-tight">
                Amsterdam, Netherlands
                <br />
                Serving clients across Europe and globally
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">Get in touch</h2>
              <div className="mt-3 space-y-2">
                <div>
                  <p>General inquiries</p>
                  <Link
                    href="mailto:info@cerebello.nl"
                    className="text-muted-foreground mt-3 text-lg font-medium tracking-tight"
                  >
                    info@cerebello.nl
                  </Link>
                </div>
                <div>
                  <p>AI Implementation Scan</p>
                  <Link
                    href="mailto:scan@cerebello.nl"
                    className="text-muted-foreground mt-3 text-lg font-medium tracking-tight"
                  >
                    scan@cerebello.nl
                  </Link>
                </div>
                <div>
                  <p>Partnership opportunities</p>
                  <Link
                    href="mailto:partners@cerebello.nl"
                    className="text-muted-foreground mt-3 text-lg font-medium tracking-tight"
                  >
                    partners@cerebello.nl
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold">Follow us</h2>
              <div className="mt-3 flex gap-6">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Facebook className="size-6" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Twitter className="size-6" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="size-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="flex-1 md:ps-8">
            <h2 className="text-lg font-semibold">Start Your AI Journey</h2>
            <p className="text-muted-foreground mt-2 text-sm">
              Tell us about your business challenges and we'll show you how AI and automation can help.
            </p>
            <form className="mt-5 space-y-5">
              {formFields.map((field) => (
                <div key={field.name} className="flex flex-col gap-2">
                  <Label>
                    {field.label}
                    {field.optional && (
                      <span className="text-muted-foreground/60">
                        {' '}
                        (optional)
                      </span>
                    )}
                  </Label>
                  {field.type === 'textarea' ? (
                    <Textarea
                      name={field.name}
                      placeholder={field.placeholder}
                      className="min-h-[120px] resize-none"
                    />
                  ) : (
                    <Input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                    />
                  )}
                </div>
              ))}

              <div className="flex justify-end">
                <Button type="submit" size="lg">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
