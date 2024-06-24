import {z} from 'zod';
import { parseDate } from '../../../utils/formatDate';
export const productSchema = z.object({
  id: z
    .string()
    .min(3, 'El ID debe tener al menos 3 caracteres')
    .max(10, 'El ID no puede tener más de 10 caracteres'),
  name: z
    .string()
    .min(5, 'El nombre debe tener al menos 5 caracteres')
    .max(100, 'El nombre no puede tener más de 100 caracteres'),
  description: z
    .string()
    .min(10, 'La descripción debe tener al menos 10 caracteres')
    .max(200, 'La descripción no puede tener más de 200 caracteres'),
  logo: z.string().min(1, 'El logo es obligatorio'),
  date_release: z
    .string()
    .min(1, 'La fecha de liberación es obligatoria')
    .refine(
      value => parseDate(value) >= new Date(),
      'La fecha debe ser igual o mayor a la fecha actual',
    ),
  date_revision: z.string().min(1, 'La fecha de revisión es obligatoria'),
});
export type FormFields = z.infer<typeof productSchema>;
