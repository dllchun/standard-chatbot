// src/app/utils/chatUtils.ts

// Extract phone number from user messages
export const extractPhoneNumberFromUser = (
  messages: { role: string; content: string }[]
): string | null => {
  const phoneNumberRegex = /(\d{4}\s?\d{4,})/;

  for (const message of messages) {
    if (message.role === "user") {
      const match = message.content.match(phoneNumberRegex);
      if (match) return match[0];
    }
  }
  return null;
};

// Format date to 'YYYY-MM-DD HH:mm' (24-hour format)
export const formatDateTo24Hour = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}`;
};
