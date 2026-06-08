import thumbLabelprop from "../public/images/works/projects/labelprop.png";
import thumbBacktranslation from "../public/images/works/projects/backtranslation.png";
import thumbMnemeAI from "../public/images/works/projects/mnemeai.png";
import thumbYOLOCLIP from "../public/images/works/projects/yoloclip.png";
import thumbFoodfeed from "../public/images/works/projects/foodfeed.png";
import thumbTranslation from "../public/images/works/projects/translation.png";
import thumbCoffeeApp from "../public/images/works/projects/coffee_app.png";
import thumbIm2Katex from "../public/images/works/projects/im2katex.png";
import thumbThorch from "../public/images/works/projects/mythorch.webp";
import thumbTrassify from "../public/images/works/projects/trassify.png";
import thumbCrashCourse from "../public/images/works/projects/crashcourse.png";
import thumbBanner from "../public/images/banner.png";
import thumbDictionary from "../public/images/works/projects/dictionary.png";
import thumbSNORD from "../public/images/works/projects/snord.png";
import thumbSCUDEM from "../public/images/works/projects/scudem.png";
import thumbMCM from "../public/images/works/projects/tennisball.jpg";
import thumbENTRep from "../public/images/works/projects/entrep.png";
import thumbLEAN from "../public/images/works/projects/lean.png";
import thumbCS101 from "../public/images/works/projects/cs101.png";
import thumbS4VN from "../public/images/works/projects/s4vn.jpg";
import thumbProjectX from "../public/images/works/projects/projectx.png";
import thumbHalfway from "../public/images/works/publications/halfway.png";
import thumbHover from "../public/images/works/publications/unet_hovergnn.png";
import thumbCLEF from "../public/images/works/publications/fungiclef.png";
import thumbProto from "../public/images/works/publications/protocluster.png";
import thumbMDEC from "../public/images/works/publications/depthfusion.png";
import thumbMOBGCN from "../public/images/works/publications/mobgcn.png";
import thumbSketch from "../public/images/works/publications/sketch.png";
import thumbText from "../public/images/works/publications/text.png";
import thumbSperm from "../public/images/works/publications/medico.png";
import thumbPlant from "../public/images/works/publications/soict.png";
import thumbSplash from "../public/images/works/projects/splashforest.png";
import thumbEverLast from "../public/images/works/projects/everlast.png";
import thumbSBShuttle from "../public/images/works/projects/sbshuttle.png";
import thumbCMS from "../public/images/works/projects/CMS.png";
import thumbMinesweeper from "../public/images/works/projects/minesweeper.png";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface WorkItem {
  href: string;
  title: string;
  thumb: StaticImageData;
  children?: ReactNode;
  desc?: string;
}

export const projects: WorkItem[] = [
  {
    href: "https://github.com/YangTuanAnh/ENTRep",
    title: "Fusion at the Foregut: CLIP-Based Prototypical Learning with DINOv2 Refinement for Endoscopic Image Analysis",
    thumb: thumbENTRep,
    children: <>A multimodal framework for anatomical site classification in endoscopic images. ACMMM 2025.<br /><span><b>Tech:</b> <em>PyTorch, HuggingFace Transformers</em></span></>,
  },
  {
    href: "https://drive.google.com/file/d/1E-fmgF63bEzXJoEiSMkhZu57MrxEXRUs/view",
    title: "Geo-Contextual Embeddings and Label Propagation for Commuting Flow Prediction",
    thumb: thumbLabelprop,
    children: <>Analysis of Baltimore&apos;s transportation challenges. ICM 2025.<br /><span><b>Tech:</b> <em>PyTorch, Networkx, Geopandas</em></span></>,
  },
  {
    href: "https://yangtuananh.notion.site/Low-Resource-Chinese-Han-Vietnamese-Translation-with-Multilingual-T5-and-Backtranslation-171304bfa54a804cbbc5dc51d0932bc8",
    title: "Low-Resource Chinese-Han Vietnamese Translation with Multilingual T5",
    thumb: thumbBacktranslation,
    children: <>Fine-tuned mT5 with sampling-based backtranslation.<br /><span><b>Tech:</b> <em>PyTorch, LASER, HuggingFace</em></span></>,
  },
  {
    href: "https://github.com/htamlive/MnemeAI---Smart-Note-Assistant",
    title: "MnemeAI — Smart Note Assistant",
    thumb: thumbMnemeAI,
    children: <>4th place at HCMUS AIInnovation 2024.<br /><span><b>Tech:</b> <em>Langchain, Redis, Flask, AWS, Docker</em></span></>,
  },
  {
    href: "https://github.com/doraemonidol/SNORD",
    title: "SNORD: Smart Nicotine Oversight Device",
    thumb: thumbSNORD,
    children: <>Intelligent e-cigarette product.<br /><span><b>Tech:</b> <em>Flutter, Golang, Firebase, GCP</em></span></>,
  },
  {
    href: "https://www.youtube.com/watch?v=rrICk3Ldjtk",
    title: "SCUDEM 2023 — Kangaroo Care",
    thumb: thumbSCUDEM,
    children: <>Outstanding Award, 4th out of 30+.<br /><span><b>Tech:</b> <em>Python, numpy, scipy, LaTeX</em></span></>,
  },
  {
    href: "#",
    title: "YOLO-CLIP for Gunpoint Gaze",
    thumb: thumbYOLOCLIP,
    children: <>NUS CS4243. 4.75/5 Methodology, 5/5 Results.<br /><span><b>Tech:</b> <em>PyTorch, OpenCV, Ultralytics</em></span></>,
  },
  {
    href: "https://github.com/YangTuanAnh/foodfeed_django_backend",
    title: "FoodFeed",
    thumb: thumbFoodfeed,
    children: <>CS426 — Android food sharing app.<br /><span><b>Tech:</b> <em>Android Studio, Django, AWS, Docker</em></span></>,
  },
  {
    href: "https://github.com/phkhanhtrinh23/translation_layoutrecovery",
    title: "Document Translation with Layout Recovery",
    thumb: thumbTranslation,
    children: <>Second Prize, Cinnamon AI Bootcamp 2023.<br /><span><b>Tech:</b> <em>NextJS, Django, MaskRCNN</em></span></>,
  },
  {
    href: "https://lablab.ai/event/openai-hackathon/hcmuwus/mythorch-revolutionary-documents-interaction",
    title: "MyThorch",
    thumb: thumbThorch,
    children: <>Document interaction with long-term memory AI.<br /><span><b>Tech:</b> <em>React, Flask, Redis, GPT-3</em></span></>,
  },
  {
    href: "https://drive.google.com/file/d/1IJlT7H6YRhYjPTklHBUCgcnVtFJ1cdCP/view",
    title: "Unlocking Tennis Dynamics",
    thumb: thumbMCM,
    children: <>MCM 2024.<br /><span><b>Tech:</b> <em>sklearn, PyTorch</em></span></>,
  },
];

export const collaborations: WorkItem[] = [
  { href: "https://www.projectxvietnam.org/", title: "Project X Vietnam", thumb: thumbProjectX, desc: "Connecting startups with young Vietnamese talents." },
  { href: "https://lean.social/", title: "LEAN Social", thumb: thumbLEAN, desc: "MVP for Edutech startup." },
  { href: "https://gdscxsab.github.io/CS101/index.html", title: "GDSCxSAB CS101", thumb: thumbCS101, desc: "Additional soft skills in CS." },
  { href: "https://steamforvietnam.org/", title: "STEAM For Vietnam", thumb: thumbS4VN, desc: "Course curricula & technical operations." },
];

export const publications: WorkItem[] = [
  { href: "https://arxiv.org/abs/2603.14832", title: "Halfway to 3D: Ensembling 2.5D and 3D Models for COVID-19 CT", thumb: thumbHalfway, desc: "CVPRW 2026." },
  { href: "https://github.com/YangTuanAnh/UNet-HoVerGNN", title: "UNet-HoVerGNN for Nuclei Segmentation", thumb: thumbHover, desc: "ICMV 2025." },
  { href: "https://ceur-ws.org/Vol-4038/paper_263.pdf", title: "Mushroom for Improvement: Prototypical Few-Shot Learning", thumb: thumbCLEF, desc: "FungiCLEF25 @ CVPR-FGVC." },
  { href: "https://dx.doi.org/10.2139/ssrn.5258950", title: "SHREC 2025: Protein Surface Shape Retrieval", thumb: thumbProto, desc: "ProtoCluster — multi-stage GNN." },
  { href: "https://arxiv.org/abs/2504.17787", title: "Monocular Depth Estimation Challenge", thumb: thumbMDEC, desc: "DepthFusion — ensemble-based." },
  { href: "https://github.com/HySonLab/MultiscaleHSI", title: "MOB-GCN for Hyperspectral Imaging", thumb: thumbMOBGCN, desc: "Research internship @ UAB." },
  { href: "https://2023.multimediaeval.com/paper15.pdf", title: "Optimizing Sperm Detection", thumb: thumbSperm, desc: "MediaEval 2023." },
  { href: "https://doi.org/10.1145/3628797.3629016", title: "Insect Pest Recognition", thumb: thumbPlant, desc: "SoICT 2023." },
  { href: "https://paperswithcode.com/paper/sketchanimar", title: "SketchANIMAR", thumb: thumbSketch, desc: "SHREC 2023 — Top 2." },
  { href: "https://paperswithcode.com/paper/textanimar", title: "TextANIMAR", thumb: thumbText, desc: "SHREC 2023 — Top 2." },
];

export const pastWorks: WorkItem[] = [
  { href: "https://github.com/YangTuanAnh/midterms_coffee_app", title: "Coffee Ordering App", thumb: thumbCoffeeApp, desc: "Flutter — CS426 Midterms." },
  { href: "https://github.com/YangTuanAnh/Im2KaTeX-Notion-Plugin", title: "Im2KaTeX Notion Integration", thumb: thumbIm2Katex, desc: "Streamlit + Pix2Tex." },
  { href: "https://github.com/YangTuanAnh/CS202_Project", title: "CS202 Crash Course", thumb: thumbCrashCourse, desc: "3D Crossy Road-inspired game." },
  { href: "https://github.com/YangTuanAnh/13-HCMUwUS", title: "Trassify", thumb: thumbTrassify, desc: "Recyclable trash detection." },
  { href: "/", title: "Portfolio Website", thumb: thumbBanner, desc: "NextJS, TailwindCSS, MDX, Firebase." },
  { href: "https://github.com/YangTuanAnh/CS163-Dictionary-project", title: "CS163 Dictionary", thumb: thumbDictionary, desc: "Data structures & algorithms." },
  { href: "https://github.com/YangTuanAnh/hcmuwus", title: "EverLast", thumb: thumbEverLast, desc: "End-of-life logistics webapp." },
  { href: "https://youtu.be/hyYEWD2tYzg", title: "SBShuttle", thumb: thumbSBShuttle, desc: "Top-30, Tiki Hacking Trail 2022." },
  { href: "https://github.com/YangTuanAnh/CS162-project", title: "CS162 Student Management System", thumb: thumbCMS, desc: "LMS with C/C++." },
  { href: "https://github.com/YangTuanAnh/MinesweeperCS161", title: "CS161 Minesweeper", thumb: thumbMinesweeper, desc: "Customizable minesweeper." },
  { href: "https://arcade.makecode.com/15786-25714-46377-44307", title: "SplashForest", thumb: thumbSplash, desc: "Bomberman-inspired 8-bit." },
];
