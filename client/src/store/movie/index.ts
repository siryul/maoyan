import { defineStore } from 'pinia';
import { computed, readonly, ref } from 'vue';
import type { ICondition, IMovie } from '../../types/commonTypes';
import { Movie } from '../../api/movie';
import { isResponsePageData } from '../../utils';

type MoviesType = Required<IMovie>[];

export const useMovieStore = defineStore('movie', () => {
  // 电影列表
  const _movies = ref<MoviesType>([]);

  // 搜索条件
  const _searchCondition = ref<Required<ICondition>>({
    offset: 0, // 偏移量
    limit: 10, // 每页限制的电影数量
    where: {}, // 查询条件
  });

  // 加载状态
  const _isLoading = ref<boolean>(false);

  // 总记录数
  const _total = ref<number>(0);

  const totalPage = computed(() => {
    return Math.ceil(_total.value / _searchCondition.value.limit);
  });

  const setSearchCondition = (sd: ICondition) => {
    Object.assign(_searchCondition.value, sd);
  };

  const setTotal = (t: number) => {
    _total.value = t;
  };

  const setIsLoading = (state: boolean) => {
    _isLoading.value = state;
  };

  const setMovies = (m: Required<IMovie>[]) => {
    _movies.value = m;
  };

  const deleteMovie = async (id: number) => {
    const res = await Movie.delete(id);
    if (res.data) {
      // 删除成功
      setMovies(_movies.value.filter((m) => m.id !== id));
    }
  };

  const fetchMovie = async (condition: ICondition = {}) => {
    setIsLoading(true);
    setSearchCondition(condition);
    const res = await Movie.find(_searchCondition.value);
    if (isResponsePageData(res)) {
      setTotal(res.total);
      setMovies(res.data as MoviesType);
    } else {
      // 错误
      console.log(res);
    }

    setIsLoading(false);
  };

  return {
    movies: readonly(_movies),
    searchCondition: readonly(_searchCondition),
    isLoading: readonly(_isLoading),
    total: readonly(_total),
    totalPage,
    setSearchCondition,
    setTotal,
    setIsLoading,
    setMovies,
    deleteMovie,
    fetchMovie,
  };
});
