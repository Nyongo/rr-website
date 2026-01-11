import emailjs from "@emailjs/browser";

// EmailJS Configuration
// TODO: Add your EmailJS Public Key here (find it in EmailJS Dashboard > Integration > API Keys)
const EMAILJS_PUBLIC_KEY = "bX1U9rZMqC3kD1WWT";
const EMAILJS_SERVICE_ID = "service_2tf1p3j";
const EMAILJS_TEMPLATE_ID = "template_7d8gcin";

// Initialize EmailJS
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export function initContactForm() {
  // Wait for DOM to be ready
  if (typeof window === "undefined") return;

  const form = document.getElementById("contact-form") as HTMLFormElement;
  const submitBtn = document.getElementById("submit-btn") as HTMLButtonElement;
  const submitText = document.getElementById("submit-text") as HTMLSpanElement;
  const submitLoading = document.getElementById(
    "submit-loading"
  ) as HTMLSpanElement;
  const successMessage = document.getElementById(
    "success-message"
  ) as HTMLDivElement;
  const errorMessage = document.getElementById(
    "error-message"
  ) as HTMLDivElement;
  const errorText = document.getElementById("error-text") as HTMLSpanElement;

  if (!form || !submitBtn) {
    // If elements not found, wait a bit and try again (for hydration)
    setTimeout(() => initContactForm(), 100);
    return;
  }

  function showSuccess() {
    if (successMessage && form) {
      successMessage.classList.remove("hidden");
      if (errorMessage) errorMessage.classList.add("hidden");
      form.reset();

      // Scroll to success message
      successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });

      // Hide success message after 10 seconds
      setTimeout(() => {
        successMessage.classList.add("hidden");
      }, 10000);
    }
  }

  function showError(message?: string) {
    if (errorMessage) {
      errorMessage.classList.remove("hidden");
      if (successMessage) successMessage.classList.add("hidden");
      if (message && errorText) {
        errorText.textContent = message;
      }

      // Scroll to error message
      errorMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  function hideMessages() {
    if (successMessage) successMessage.classList.add("hidden");
    if (errorMessage) errorMessage.classList.add("hidden");
  }

  function setLoading(loading: boolean) {
    if (!submitBtn || !submitText || !submitLoading) return;

    if (loading) {
      submitBtn.disabled = true;
      submitText.classList.add("hidden");
      submitLoading.classList.remove("hidden");
    } else {
      submitBtn.disabled = false;
      submitText.classList.remove("hidden");
      submitLoading.classList.add("hidden");
    }
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    hideMessages();
    setLoading(true);

    // Check if Public Key is set
    if (!EMAILJS_PUBLIC_KEY) {
      showError(
        "EmailJS is not configured. Please add your Public Key in the contact-form.ts file."
      );
      setLoading(false);
      return;
    }

    // Get form data
    const formData = new FormData(form);
    const templateParams = {
      from_name: formData.get("name") as string,
      from_email: formData.get("email") as string,
      school_name: formData.get("school") as string,
      number_of_students:
        (formData.get("students") as string) || "Not specified",
      message: formData.get("message") as string,
      to_email: "", // Will be set in EmailJS template
    };

    try {
      // Send email via EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        showSuccess();
      } else {
        showError("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      showError(
        "Failed to send message. Please try again or contact us directly."
      );
    } finally {
      setLoading(false);
    }
  });
}
