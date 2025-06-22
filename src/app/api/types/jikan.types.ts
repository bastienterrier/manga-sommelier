export type JikanPagedResult<T> = {
  pagination: {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: {
      count: number;
      total: number;
      per_page: number;
    };
  };
  data: T[];
};

export type JikanMangaDto = {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  title: string;
  synopsis: string;
};
