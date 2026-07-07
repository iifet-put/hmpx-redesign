import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { enviarLead } from "@/services/leadForm.service";

gsap.registerPlugin(ScrollTrigger);

type CTASectionProps = {
  embedded?: boolean;
};

type FormField = "nome" | "email" | "empresa" | "telefone" | "faturamento";

type FormErrors = Partial<Record<FormField, string>>;

const REQUIRED_FIELDS: FormField[] = ["nome", "email", "empresa", "telefone", "faturamento"];

function validateField(field: FormField, value: string) {
  const trimmedValue = value.trim();

  switch (field) {
    case "nome":
      if (!trimmedValue) return "Informe seu nome completo para seguirmos com o atendimento.";
      if (trimmedValue.length < 3) return "Digite o nome completo, por favor.";
      return "";
    case "email":
      if (!trimmedValue) return "Informe um e-mail para receber o retorno.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
        return "Digite um e-mail válido, como nome@empresa.com.br.";
      }
      return "";
    case "empresa":
      if (!trimmedValue) return "Informe o nome da sua empresa.";
      if (trimmedValue.length < 2) return "Digite um nome de empresa válido.";
      return "";
    case "telefone": {
      if (!trimmedValue) return "Informe um telefone para contato.";
      const onlyNumbers = trimmedValue.replace(/\D/g, "");
      if (onlyNumbers.length < 10) return "Digite um telefone completo, com DDD.";
      return "";
    }
    case "faturamento":
      if (!trimmedValue) return "Escolha uma faixa de faturamento para continuarmos.";
      return "";
    default:
      return "";
  }
}

function formatPhoneValue(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (!digits) {
    return "";
  }

  if (digits.length <= 2) {
    return `(${digits}`;
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function validateForm(formData: FormData) {
  return REQUIRED_FIELDS.reduce<FormErrors>((accumulator, field) => {
    const value = String(formData.get(field) ?? "");
    const error = validateField(field, value);

    if (error) {
      accumulator[field] = error;
    }

    return accumulator;
  }, {});
}

function ContactInfo({ horizontal = false }: { horizontal?: boolean }) {
  return (
    <div
      className={cn(
        "cta-reveal border-t border-gray-200",
        horizontal
          ? "grid gap-3 pt-4 md:grid-cols-[auto_auto_minmax(0,1fr)] md:items-center md:gap-8"
          : "flex flex-col gap-3 pt-6"
      )}
    >
      <div className="flex items-center gap-3">
        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className="text-sm text-gray-600">atendimento@hmpx.com.br</span>
      </div>
      <div className="flex items-center gap-3">
        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="text-sm text-gray-600">(16) 3620-4545</span>
      </div>
      <div className="flex items-center gap-3 md:justify-self-end">
        <svg className="w-4 h-4 shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="text-sm text-gray-600">Av. Braz Olaia Acosta, 2100 - Nova Aliança, Ribeirão Preto</span>
      </div>
    </div>
  );
}

export default function CTASection({ embedded = false }: CTASectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<FormField, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const labelClassName = cn(
    "block font-[family-name:var(--font-mono)] text-[10px] tracking-wider uppercase text-gray-400",
    embedded ? "mb-1.5" : "mb-2"
  );
  const inputClassName = cn(
    "w-full px-4 bg-gray-50 border border-gray-200 rounded text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#BA1414]/40 focus:ring-1 focus:ring-[#BA1414]/10 transition-all duration-300",
    embedded ? "py-2.5" : "py-3"
  );
  const errorClassName = "mt-1.5 text-xs text-red-500 leading-relaxed";

  const getFieldError = (field: FormField) => {
    if (!touched[field] && !errors[field]) {
      return "";
    }

    return errors[field] ?? "";
  };

  const markFieldTouched = (field: FormField, value: string) => {
    setTouched((currentTouched) => ({ ...currentTouched, [field]: true }));
    setErrors((currentErrors) => ({
      ...currentErrors,
      [field]: validateField(field, value),
    }));
  };

  const updateFieldError = (field: FormField, value: string) => {
    if (!touched[field] && !errors[field]) {
      return;
    }

    setErrors((currentErrors) => ({
      ...currentErrors,
      [field]: validateField(field, value),
    }));
  };

  useEffect(() => {
    if (embedded) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".cta-reveal").forEach((el, i) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.5,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [embedded]);

  return (
    <section
      ref={sectionRef}
      id={embedded ? undefined : "contato"}
      className={cn(
        "relative overflow-hidden bg-gray-50/50",
        embedded ? "py-6 md:py-8" : "py-28 md:py-36"
      )}
    >
      {/* Red Line - final accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BA1414]/15 to-transparent" />

      <div className="relative container max-w-5xl mx-auto px-4">
        <div
          className={cn(
            "grid lg:grid-cols-12",
            embedded ? "gap-8 lg:gap-10" : "gap-12 lg:gap-16"
          )}
        >
          {/* Left: Copy */}
          <div className="lg:col-span-5">
            <div
              className={cn(
                "cta-reveal flex items-center gap-3",
                embedded ? "mb-4" : "mb-8"
              )}
            >
              <div className="w-8 h-px bg-[#BA1414]" />
              <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.2em] uppercase text-[#BA1414]">
                Próximo Passo
              </span>
            </div>

            <h2
              className={cn(
                "cta-reveal font-[family-name:var(--font-display)] font-bold text-3xl leading-[1.1] text-gray-900",
                embedded ? "mb-4" : "mb-6 md:text-4xl"
              )}
            >
              Quanto sua empresa está deixando na mesa?
            </h2>

            <p
              className={cn(
                "cta-reveal text-gray-500 text-sm leading-relaxed",
                embedded ? "mb-4" : "mb-8"
              )}
            >
              Nosso diagnóstico estratégico gratuito identifica em 72 horas o
              potencial de economia e recuperação da sua operação. Sem compromisso.
              Sem custo. Apenas inteligência aplicada.
            </p>

            <div
              className={cn(
                "cta-reveal flex flex-col",
                embedded ? "gap-2 mb-5" : "gap-3 mb-10"
              )}
            >
              {[
                "Diagnóstico completo em 72h",
                "Sem custo e sem compromisso",
                "Análise personalizada do seu setor",
                "Potencial de economia quantificado",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="text-gray-500 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {!embedded ? <ContactInfo /> : null}
          </div>

          {/* Right: Form */}
          <div className={cn("lg:col-span-7", embedded && "lg:mt-5")}>
            <div
              className={cn(
                "cta-reveal rounded-lg bg-white/90 border border-gray-100 shadow-sm",
                embedded ? "p-5 md:p-6" : "p-6 md:p-8"
              )}
            >
              <form
                className={cn("flex flex-col", embedded ? "gap-3" : "gap-4")}
                onSubmit={async (e) => {
                  e.preventDefault();

                  if (isSubmitting) {
                    return;
                  }

                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  const nextErrors = validateForm(formData);

                  setTouched(REQUIRED_FIELDS.reduce((accumulator, field) => {
                    accumulator[field] = true;
                    return accumulator;
                  }, {} as Partial<Record<FormField, boolean>>));
                  setErrors(nextErrors);

                  if (Object.keys(nextErrors).length > 0) {
                    return;
                  }

                  setIsSubmitting(true);
                  setSubmitMessage("");

                  try {
                    await enviarLead({
                      nome: String(formData.get("nome") ?? ""),
                      email: String(formData.get("email") ?? ""),
                      telefone: String(formData.get("telefone") ?? ""),
                      empresa: String(formData.get("empresa") ?? ""),
                      faturamento: String(formData.get("faturamento") ?? ""),
                    });

                    setSubmitMessage("Recebido! Seu diagnóstico foi enviado com sucesso.");

                    window.setTimeout(() => {
                      window.location.assign("/");
                    }, 1800);
                  } finally {
                    window.setTimeout(() => {
                      setIsSubmitting(false);
                    }, 1800);
                  }
                }}
              >
                <div className={cn("grid sm:grid-cols-2", embedded ? "gap-3" : "gap-4")}>
                  <div>
                    <label className={labelClassName}>Nome</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      placeholder="Seu nome completo"
                      className={inputClassName}
                      aria-invalid={Boolean(getFieldError("nome"))}
                      onBlur={(event) => markFieldTouched("nome", event.currentTarget.value)}
                      onChange={(event) => updateFieldError("nome", event.currentTarget.value)}
                    />
                    <p className={errorClassName}>{getFieldError("nome")}</p>
                  </div>
                  <div>
                    <label className={labelClassName}>E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="email@empresa.com.br"
                      className={inputClassName}
                      aria-invalid={Boolean(getFieldError("email"))}
                      onBlur={(event) => markFieldTouched("email", event.currentTarget.value)}
                      onChange={(event) => updateFieldError("email", event.currentTarget.value)}
                    />
                    <p className={errorClassName}>{getFieldError("email")}</p>
                  </div>
                </div>
                <div className={cn("grid sm:grid-cols-2", embedded ? "gap-3" : "gap-4")}>
                  <div>
                    <label className={labelClassName}>Empresa</label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      placeholder="Nome da empresa"
                      className={inputClassName}
                      aria-invalid={Boolean(getFieldError("empresa"))}
                      onBlur={(event) => markFieldTouched("empresa", event.currentTarget.value)}
                      onChange={(event) => updateFieldError("empresa", event.currentTarget.value)}
                    />
                    <p className={errorClassName}>{getFieldError("empresa")}</p>
                  </div>
                  <div>
                    <label className={labelClassName}>Telefone</label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      inputMode="numeric"
                      autoComplete="tel"
                      placeholder="(16) 99999-9999"
                      className={inputClassName}
                      aria-invalid={Boolean(getFieldError("telefone"))}
                      onBlur={(event) => markFieldTouched("telefone", event.currentTarget.value)}
                      onChange={(event) => {
                        const formattedValue = formatPhoneValue(event.currentTarget.value);
                        event.currentTarget.value = formattedValue;
                        updateFieldError("telefone", formattedValue);
                      }}
                    />
                    <p className={errorClassName}>{getFieldError("telefone")}</p>
                  </div>
                </div>
                <div>
                  <label className={labelClassName}>Faturamento anual</label>
                  <select
                    className={cn(inputClassName, "text-gray-500 appearance-none")}
                    id="faturamento"
                    name="faturamento"
                    defaultValue=""
                    aria-invalid={Boolean(getFieldError("faturamento"))}
                    onBlur={(event) => markFieldTouched("faturamento", event.currentTarget.value)}
                    onChange={(event) => updateFieldError("faturamento", event.currentTarget.value)}
                  >
                    <option value="" disabled>Selecione uma faixa</option>
                    <option value="50-100m">R$ 50M – R$ 100M</option>
                    <option value="100-500m">R$ 100M – R$ 500M</option>
                    <option value="500m-1b">R$ 500M – R$ 1B</option>
                    <option value="1b+">Acima de R$ 1B</option>
                  </select>
                  <p className={errorClassName}>{getFieldError("faturamento")}</p>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full px-8 text-sm font-semibold text-white bg-[#BA1414] hover:bg-[#D41818] rounded transition-all duration-300 hover:shadow-[0_4px_20px_rgba(186,20,20,0.25)] active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-[#BA1414] disabled:hover:shadow-none",
                    embedded ? "py-3" : "py-3.5 mt-2"
                  )}
                >
                  {isSubmitting ? "Enviando..." : "Solicitar Diagnóstico Gratuito"}
                </button>
              </form>

              {submitMessage ? (
                <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-emerald-900">
                        {submitMessage}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-emerald-700/80">
                        Em instantes você será redirecionado para a página inicial.
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}

              <p
                className={cn(
                  "text-[10px] text-gray-400 font-[family-name:var(--font-mono)] text-center",
                  embedded ? "mt-3" : "mt-4"
                )}
              >
                Dados tratados com sigilo absoluto. Resposta em até 24h úteis.
              </p>
            </div>
          </div>

          {embedded ? (
            <div className="lg:col-span-12">
              <ContactInfo horizontal />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
