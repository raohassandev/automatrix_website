import { FloatingWhatsApp } from 'react-floating-whatsapp';
import React from 'react';

export default function Whatsapp() {
  return (
    <FloatingWhatsApp
      phoneNumber='923111646640'
      accountName='Ali Hamza'
      avatar='assets/images/amx/hamza.png'
      statusMessage='Sales Engineer at Automtrix'
      allowClickAway
      allowEsc
      notification
      notificationSound
    />
  );
}
