import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section className="section section--contact" id="contact" aria-labelledby="contact-title">
      <div className="site-container contact-layout">
        <div>
          <span className="eyebrow eyebrow--light"><span className="eyebrow__dash" /> 04 / CONTACT</span>
          <h2 id="contact-title">Ai un proiect în minte? <em>Hai să-i dăm direcție.</em></h2>
          <p>Spune-ne ce îți propui, iar noi te ajutăm să înțelegi posibilitățile de dezvoltare și pașii următori.</p>
          <a className="button button--light" href="mailto:mihai.nicolescu@umstudio.ro?subject=Solicitare%20consultanta%20urbanistica">Scrie-ne un mesaj <ArrowUpRight size={19} /></a>
        </div>
        <div className="contact-details">
          <a className="contact-detail" href="mailto:mihai.nicolescu@umstudio.ro"><Mail size={24} strokeWidth={1.6}/><span><small>EMAIL</small>mihai.nicolescu@umstudio.ro</span></a>
          <a className="contact-detail" href="tel:+40747553075"><Phone size={24} strokeWidth={1.6}/><span><small>TELEFON</small>+40 747 553 075</span></a>
          <div className="contact-detail"><MapPin size={24} strokeWidth={1.6}/><span><small>ADRESĂ</small>Strada Durau nr. 156, Sector 1, București</span></div>
        </div>
      </div>
      <div className="contact-orbit" aria-hidden="true" />
    </section>
  );
}
