import { TITLE_ERROR_MESSAGE } from 'constants/index';

import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
	title: Yup.string().required(TITLE_ERROR_MESSAGE),
});
