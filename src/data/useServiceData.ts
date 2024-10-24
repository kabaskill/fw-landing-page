import { useScopedI18n } from "@/locales/client";
import { Services } from "@/types";
import { galleryImages } from "./galleryImages";

const useServicesData = (): Services[] => {
  const t = useScopedI18n("services");

  return [
    {
      title: t("formtechnik.title"),
      paragraph: t("formtechnik.paragraph"),
      image: "/images/mold-close.webp",
      tags: ["Formentechnik"],
      subServices: [
        {
          title: t("formtechnik.subServices.0.title"),
          description: t("formtechnik.subServices.0.description"),
          images: galleryImages,
          path: "/beratung-und-design",
          iconName: "design",
          paragraph: t("formtechnik.subServices.0.paragraph"),
          nestedList: [
            {
              title: t("formtechnik.subServices.0.nestedList.0.title"),
              list: [
                t("formtechnik.subServices.0.nestedList.0.list.0"),
                t("formtechnik.subServices.0.nestedList.0.list.1"),
                t("formtechnik.subServices.0.nestedList.0.list.2"),
                t("formtechnik.subServices.0.nestedList.0.list.3"),
                t("formtechnik.subServices.0.nestedList.0.list.4"),
                t("formtechnik.subServices.0.nestedList.0.list.5"),
              ],
            },
            {
              title: t("formtechnik.subServices.0.nestedList.1.title"),
              list: [t("formtechnik.subServices.0.nestedList.1.list.0")],
            },
            {
              title: t("formtechnik.subServices.0.nestedList.2.title"),
              list: [
                t("formtechnik.subServices.0.nestedList.2.list.0"),
                t("formtechnik.subServices.0.nestedList.2.list.1"),
                t("formtechnik.subServices.0.nestedList.2.list.2"),
              ],
            },
          ],
          cta: t("formtechnik.subServices.0.cta"),
        },
        {
          title: t("formtechnik.subServices.1.title"),
          description: t("formtechnik.subServices.1.description"),
          images: galleryImages,
          path: "/werkzeugherstellung",
          iconName: "gear",
          paragraph: t("formtechnik.subServices.1.paragraph"),
          nestedList: [
            {
              title: t("formtechnik.subServices.1.nestedList.0.title"),
              list: [
                t("formtechnik.subServices.1.nestedList.0.list.0"),
                t("formtechnik.subServices.1.nestedList.0.list.1"),
                t("formtechnik.subServices.1.nestedList.0.list.2"),
                t("formtechnik.subServices.1.nestedList.0.list.3"),
              ],
            },
            {
              title: t("formtechnik.subServices.1.nestedList.1.title"),
              list: [t("formtechnik.subServices.1.nestedList.1.list.0")],
            },
          ],
          cta: t("formtechnik.subServices.1.cta"),
        },
        {
          title: t("formtechnik.subServices.2.title"),
          description: t("formtechnik.subServices.2.description"),
          images: galleryImages,
          path: "/abmusterung-und-kleinserienproduktion",
          iconName: "manufacture",
          paragraph: t("formtechnik.subServices.2.paragraph"),
          nestedList: [
            {
              title: t("formtechnik.subServices.2.nestedList.0.title"),
              list: [t("formtechnik.subServices.2.nestedList.0.list.0")],
            },
          ],
          cta: t("formtechnik.subServices.2.cta"),
        },
      ],
    },

    {
      title: t("fertigung.title"),
      paragraph: t("fertigung.paragraph"),
      image: "/images/in-house.webp",
      tags: galleryImages,
      subServices: [
        {
          title: t("fertigung.subServices.0.title"),
          description: t("fertigung.subServices.0.description"),
          images: galleryImages,
          path: "/fraesen",
          iconName: "machine",
          paragraph: t("fertigung.subServices.0.paragraph"),
          nestedList: [
            {
              title: t("fertigung.subServices.0.nestedList.0.title"),
              list: [
                t("fertigung.subServices.0.nestedList.0.list.0"),
                t("fertigung.subServices.0.nestedList.0.list.1"),
                t("fertigung.subServices.0.nestedList.0.list.2"),
                t("fertigung.subServices.0.nestedList.0.list.3"),
                t("fertigung.subServices.0.nestedList.0.list.4"),
              ],
            },
          ],
          cta: t("fertigung.subServices.0.cta"),
        },
        {
          title: t("fertigung.subServices.1.title"),
          description: t("fertigung.subServices.1.description"),
          images: galleryImages,
          path: "/drehen",
          iconName: "machine",
          paragraph: t("fertigung.subServices.1.paragraph"),
          nestedList: [
            {
              title: t("fertigung.subServices.1.nestedList.0.title"),
              list: [
                t("fertigung.subServices.1.nestedList.0.list.0"),
                t("fertigung.subServices.1.nestedList.0.list.1"),
                t("fertigung.subServices.1.nestedList.0.list.2"),
              ],
            },
            {
              title: t("fertigung.subServices.1.nestedList.1.title"),
              list: [
                t("fertigung.subServices.1.nestedList.1.list.0"),
                t("fertigung.subServices.1.nestedList.1.list.1"),
              ],
            },
          ],
          cta: t("fertigung.subServices.1.cta"),
        },
        {
          title: t("fertigung.subServices.2.title"),
          description: t("fertigung.subServices.2.description"),
          images: galleryImages,
          path: "/senkerodieren",
          iconName: "edm",
          paragraph: t("fertigung.subServices.2.paragraph"),
          nestedList: [
            {
              title: t("fertigung.subServices.2.nestedList.0.title"),
              list: [
                t("fertigung.subServices.2.nestedList.0.list.0"),
                t("fertigung.subServices.2.nestedList.0.list.1"),
              ],
            },
            {
              title: t("fertigung.subServices.2.nestedList.1.title"),
              list: [
                t("fertigung.subServices.2.nestedList.1.list.0"),
                t("fertigung.subServices.2.nestedList.1.list.1"),
                t("fertigung.subServices.2.nestedList.1.list.2"),
              ],
            },
          ],
          cta: t("fertigung.subServices.2.cta"),
        },
        {
          title: t("fertigung.subServices.3.title"),
          description: t("fertigung.subServices.3.description"),
          images: galleryImages,
          path: "/drahterodieren",
          iconName: "edm",
          paragraph: t("fertigung.subServices.3.paragraph"),
          nestedList: [
            {
              title: t("fertigung.subServices.3.nestedList.0.title"),
              list: [t("fertigung.subServices.3.nestedList.0.list.0")],
            },
            {
              title: t("fertigung.subServices.3.nestedList.1.title"),
              list: [
                t("fertigung.subServices.3.nestedList.1.list.0"),
                t("fertigung.subServices.3.nestedList.1.list.1"),
              ],
            },
          ],
          cta: t("fertigung.subServices.3.cta"),
        },
        {
          title: t("fertigung.subServices.4.title"),
          description: t("fertigung.subServices.4.description"),
          images: galleryImages,
          path: "/laserschweissen",
          iconName: "laser",
          paragraph: t("fertigung.subServices.4.paragraph"),
          nestedList: [
            {
              title: t("fertigung.subServices.4.nestedList.0.title"),
              list: [t("fertigung.subServices.4.nestedList.0.list.0")],
            },
            {
              title: t("fertigung.subServices.4.nestedList.1.title"),
              list: [
                t("fertigung.subServices.4.nestedList.1.list.0"),
                t("fertigung.subServices.4.nestedList.1.list.1"),
              ],
            },
          ],
          cta: t("fertigung.subServices.4.cta"),
        },
        {
          title: t("fertigung.subServices.5.title"),
          description: t("fertigung.subServices.5.description"),
          images: galleryImages,
          path: "/lasergravieren",
          iconName: "laser",
          paragraph: t("fertigung.subServices.5.paragraph"),
          nestedList: [
            {
              title: t("fertigung.subServices.5.nestedList.0.title"),
              list: [
                t("fertigung.subServices.5.nestedList.0.list.0"),
                t("fertigung.subServices.5.nestedList.0.list.1"),
              ],
            },
          ],
          cta: t("fertigung.subServices.5.cta"),
        },
        {
          title: t("fertigung.subServices.6.title"),
          description: t("fertigung.subServices.6.description"),
          images: galleryImages,
          path: "/hochglanzpolieren",
          iconName: "polish",
          paragraph: t("fertigung.subServices.6.paragraph"),
          nestedList: [
            {
              title: t("fertigung.subServices.6.nestedList.0.title"),
              list: [
                t("fertigung.subServices.6.nestedList.0.list.0"),
                t("fertigung.subServices.6.nestedList.0.list.1"),
                t("fertigung.subServices.6.nestedList.0.list.2"),
                t("fertigung.subServices.6.nestedList.0.list.3"),
              ],
            },
          ],
          cta: t("fertigung.subServices.6.cta"),
        },
        {
          title: t("fertigung.subServices.7.title"),
          description: t("fertigung.subServices.7.description"),
          images: galleryImages,
          path: "/flachschleifen",
          iconName: "polish",
          paragraph: t("fertigung.subServices.7.paragraph"),
          nestedList: [
            {
              title: t("fertigung.subServices.7.nestedList.0.title"),
              list: [t("fertigung.subServices.7.nestedList.0.list.0")],
            },
            {
              title: t("fertigung.subServices.7.nestedList.1.title"),
              list: [
                t("fertigung.subServices.7.nestedList.1.list.0"),
                t("fertigung.subServices.7.nestedList.1.list.1"),
              ],
            },
          ],
          cta: t("fertigung.subServices.7.cta"),
        },
      ],
    },
    {
      title: t("reparatur.title"),
      paragraph: t("reparatur.paragraph"),
      image: "/images/mold-close.webp",
      tags: ["Formentechnik"],
      subServices: [
        {
          title: t("reparatur.subServices.0.title"),
          description: t("reparatur.subServices.0.description"),
          images: galleryImages,
          path: "/renovierung",
          iconName: "renovation",
          paragraph: t("reparatur.subServices.0.paragraph"),
          nestedList: [
            {
              title: t("reparatur.subServices.0.nestedList.0.title"),
              list: [
                t("reparatur.subServices.0.nestedList.0.list.0"),
                t("reparatur.subServices.0.nestedList.0.list.1"),
              ],
            },
          ],
          cta: t("reparatur.subServices.0.cta"),
        },
        {
          title: t("reparatur.subServices.1.title"),
          description: t("reparatur.subServices.1.description"),
          images: galleryImages,
          path: "/uberholung",
          iconName: "overhaul",
          paragraph: t("reparatur.subServices.1.paragraph"),
          nestedList: [
            {
              title: t("reparatur.subServices.1.nestedList.0.title"),
              list: [
                t("reparatur.subServices.1.nestedList.0.list.0"),
                t("reparatur.subServices.1.nestedList.0.list.1"),
                t("reparatur.subServices.1.nestedList.0.list.2"),
              ],
            },
          ],
          cta: t("reparatur.subServices.1.cta"),
        },
        {
          title: t("reparatur.subServices.2.title"),
          description: t("reparatur.subServices.2.description"),
          images: galleryImages,
          path: "/werkzeug-reparatur",
          iconName: "repair",
          paragraph: t("reparatur.subServices.2.paragraph"),
          nestedList: [
            {
              title: t("reparatur.subServices.2.nestedList.0.title"),
              list: [
                t("reparatur.subServices.2.nestedList.0.list.0"),
                t("reparatur.subServices.2.nestedList.0.list.1"),
              ],
            },
          ],
          cta: t("reparatur.subServices.2.cta"),
        },
      ],
    },
  ];
};

export default useServicesData;
