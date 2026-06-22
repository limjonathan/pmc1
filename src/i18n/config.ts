import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        projects: "Projects",
        contact: "Contact",
      },
      header: {
        getInTouch: "Get in Touch",
      },
      hero: {
        badge: "Surabaya, Indonesia · Est. 1990",
        titleBefore: "35+ Years Engineering ",
        titleHighlight: "Financial Clarity",
        subtitle: "Management accounting, system design & advisory for Indonesia's growth sectors.",
        schedule: "Schedule a Consultation",
        explore: "Explore Services",
        stats: {
          clients: "Happy Clients",
          projects: "Our Project",
          team: "Team Members",
          years: "Years of Experiences",
        }
      },
      about: {
        label: "About PMC",
        heading: "Supporting Businesses From Inception Through to Exit",
        p1: "We are an expert consulting firm based in Surabaya specializing in management accounting. PMC works across a broad range of business disciplines to address critical issues, helping clients improve key organizational components, leverage technology, and strengthen their market position. Our team of service professionals and industry-specific experts delivers solutions tailored to each client's unique challenges.",
        p2: "With over three decades of deep expertise in management accounting and financial system design, we provide the strategic clarity that Indonesian businesses need to compete and grow.",
        values: {
          integrity: {
            title: "Integrity",
            desc: "Delivering quality service through reliability and integrity.",
          },
          trust: {
            title: "Trust",
            desc: "Striving to achieve client trust and satisfaction.",
          },
          diligence: {
            title: "Diligence",
            desc: "Ensuring that client businesses constantly grow and improve.",
          },
          quality: {
            title: "Quality",
            desc: "Supporting clients with professionalism and high-quality service.",
          }
        }
      },
      services: {
        label: "Our Services",
        heading: "Indonesia can be a challenging place to do business.",
        subheading: "At PMC, our services are designed to support your business from inception through to exit and everything in between.",
        categories: {
          all: "All",
          accounting: "Accounting",
          advisory: "Advisory",
          consulting: "Consulting",
        },
        items: {
          "Outsourcing Accounting Service": "Outsourcing Accounting Service",
          "Monthly Accounting Supervisory": "Monthly Accounting Supervisory",
          "Financial Statement Compilation": "Financial Statement Compilation",
          "Financial Statement Review": "Financial Statement Review",
          "Financial Statement Analysis": "Financial Statement Analysis",
          "Accounting & Management Information System Design": "Accounting & Management Information System Design",
          "Accounting System Check Up": "Accounting System Check Up",
          "Management Consultation": "Management Consultation",
          "Business Planning": "Business Planning"
        }
      },
      projects: {
        label: "Project Gallery",
        heading: "Our portfolio consists of clients in the following industries.",
        industries: {
          "Construction, Developer": "Construction, Developer",
          "Freight Forwarding, Expeditions & Logistics": "Freight Forwarding, Expeditions & Logistics",
          "Healthcare": "Healthcare",
          "Manufacturing": "Manufacturing",
          "Retail, Wholesale & Distribution": "Retail, Wholesale & Distribution",
          "Trading": "Trading"
        }
      },
      contact: {
        label: "Contact Us",
        heading: "Get in Touch",
        subheading: "Let's discuss how PMC can support your business growth and financial clarity.",
        whatsapp: "Chat on WhatsApp",
        email: "Send us an Email",
        maps: "View on Maps",
        office: "Surabaya Office",
        hours: "Business Hours"
      },
      footer: {
        tagline: "35+ Years Engineering Financial Clarity",
        quickLinks: "Quick Links",
        contact: "Contact",
        rights: "All rights reserved.",
        madeIn: "Made in Surabaya 🇮🇩"
      }
    }
  },
  id: {
    translation: {
      nav: {
        home: "Beranda",
        about: "Tentang Kami",
        services: "Layanan",
        projects: "Proyek",
        contact: "Kontak",
      },
      header: {
        getInTouch: "Hubungi Kami",
      },
      hero: {
        badge: "Surabaya, Indonesia · Est. 1990",
        titleBefore: "35+ Tahun Membangun ",
        titleHighlight: "Kejelasan Finansial",
        subtitle: "Akuntansi manajemen, desain sistem & konsultasi untuk sektor pertumbuhan di Indonesia.",
        schedule: "Jadwalkan Konsultasi",
        explore: "Jelajahi Layanan",
        stats: {
          clients: "Klien Puas",
          projects: "Proyek Kami",
          team: "Anggota Tim",
          years: "Tahun Pengalaman",
        }
      },
      about: {
        label: "Tentang PMC",
        heading: "Mendukung Bisnis Dari Awal Hingga Akhir",
        p1: "Kami adalah perusahaan konsultan ahli yang berbasis di Surabaya yang mengkhususkan diri dalam akuntansi manajemen. PMC bekerja di berbagai disiplin bisnis untuk mengatasi masalah kritis, membantu klien meningkatkan komponen organisasi utama, memanfaatkan teknologi, dan memperkuat posisi pasar mereka. Tim profesional kami dan pakar industri khusus memberikan solusi yang disesuaikan dengan tantangan unik setiap klien.",
        p2: "Dengan pengalaman lebih dari tiga dekade dalam akuntansi manajemen dan desain sistem keuangan, kami memberikan kejelasan strategis yang dibutuhkan bisnis di Indonesia untuk bersaing dan berkembang.",
        values: {
          integrity: {
            title: "Integritas",
            desc: "Memberikan layanan berkualitas melalui keandalan dan integritas.",
          },
          trust: {
            title: "Kepercayaan",
            desc: "Berusaha untuk mencapai kepercayaan dan kepuasan klien.",
          },
          diligence: {
            title: "Ketekunan",
            desc: "Memastikan bahwa bisnis klien terus tumbuh dan berkembang.",
          },
          quality: {
            title: "Kualitas",
            desc: "Mendukung klien dengan profesionalisme dan layanan berkualitas tinggi.",
          }
        }
      },
      services: {
        label: "Layanan Kami",
        heading: "Indonesia bisa menjadi tempat yang menantang untuk berbisnis.",
        subheading: "Di PMC, layanan kami dirancang untuk mendukung bisnis Anda dari awal hingga akhir dan segala sesuatu di antaranya.",
        categories: {
          all: "Semua",
          accounting: "Akuntansi",
          advisory: "Penasihat",
          consulting: "Konsultasi",
        },
        items: {
          "Outsourcing Accounting Service": "Layanan Akuntansi Outsourcing",
          "Monthly Accounting Supervisory": "Supervisi Akuntansi Bulanan",
          "Financial Statement Compilation": "Kompilasi Laporan Keuangan",
          "Financial Statement Review": "Tinjauan Laporan Keuangan",
          "Financial Statement Analysis": "Analisis Laporan Keuangan",
          "Accounting & Management Information System Design": "Desain Sistem Informasi Akuntansi & Manajemen",
          "Accounting System Check Up": "Pemeriksaan Sistem Akuntansi",
          "Management Consultation": "Konsultasi Manajemen",
          "Business Planning": "Perencanaan Bisnis"
        }
      },
      projects: {
        label: "Galeri Proyek",
        heading: "Portofolio kami terdiri dari klien di industri berikut.",
        industries: {
          "Construction, Developer": "Konstruksi & Pengembang",
          "Freight Forwarding, Expeditions & Logistics": "Pengiriman, Ekspedisi & Logistik",
          "Healthcare": "Kesehatan",
          "Manufacturing": "Manufaktur",
          "Retail, Wholesale & Distribution": "Ritel, Grosir & Distribusi",
          "Trading": "Perdagangan"
        }
      },
      contact: {
        label: "Hubungi Kami",
        heading: "Mari Berbincang",
        subheading: "Mari diskusikan bagaimana PMC dapat mendukung pertumbuhan bisnis dan kejelasan finansial Anda.",
        whatsapp: "Chat di WhatsApp",
        email: "Kirimkan Email",
        maps: "Lihat di Peta",
        office: "Kantor Surabaya",
        hours: "Jam Kerja"
      },
      footer: {
        tagline: "35+ Tahun Membangun Kejelasan Finansial",
        quickLinks: "Tautan Cepat",
        contact: "Kontak",
        rights: "Hak cipta dilindungi.",
        madeIn: "Dibuat di Surabaya 🇮🇩"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
  });

export default i18n;
