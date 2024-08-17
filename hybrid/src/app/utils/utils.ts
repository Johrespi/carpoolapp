// openChatWhatsApp.ts
export default function openChatWhatsAppCarpooolApp(phoneNumber: string, message: string) {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
