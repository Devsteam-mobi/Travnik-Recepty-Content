import LocalizedStrings from 'react-native-localization';

export const DEFAULT_LANGUAGE = '';

const translations = {
	ru: {
		all: 'Все травы',
		fito: 'Фитотерапия',
		narod: 'Народные средства',
		popular: 'Популярно о...',
		q_and_a: 'Вопросы и ответы',

		rate_app: 'Оценить приложение',
		share: 'Поделиться',
		exit: 'Выход',
		exit_out: 'Выйти',
		rate_us: 'Оценить',
		cancel: 'Отмена',
		exit_message: 'Не хотите оценить приложение перед выходом?',
		search_amount: 'Результаты поиска:',
		all_recipes: 'Все рецепты',
		later: 'Позже',
		rate_message:
			'Если Вам понравилось приложение, пожалуйста, найдите время, чтобы оценить его. Это не займет больше минуты. Спасибо за вашу поддержку!',
		never: 'Никогда',
		nothing_was_found: 'Ничего не найдено',

		translate: 'Translate',
	},
	en: {
		all: 'All the herbs',
		fito: 'Herbal medicine',
		narod: 'Folk remedies',
		popular: 'Popular on...',
		q_and_a: 'Questions and answers',

		rate_app: 'Rate app',
		share: 'Share',
		exit: 'Exit',
		exit_out: 'Exit',
		rate_us: 'Rate us',
		cancel: 'Cancel',
		exit_message: 'Do You want to rate app before exit?',
		search_amount: 'Search amount:',
		all_recipes: 'All recipes',
		later: 'Later',
		rate_message:
			'If You like our app, please, find little time to rate this. It`s not longer than minute. Thank you!',
		never: 'Never',
		nothing_was_found: 'Nothing was found',

		translate: 'Перевести',
	},
};

export default new LocalizedStrings(translations);
