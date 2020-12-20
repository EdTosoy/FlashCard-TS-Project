declare module "react-responsive-masonry" {
  interface MasonryComponent {
    columnsCount: number;
    gutter: string;
  }

  interface ResponsiveMasonryComponents {
    columnsCountBreakPoints: any;
  }
  interface IntrinsicElements {
    Masonry: MasonryComponent;
    ResponsiveMasonry: any;
  }
}
