import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Snackbar,
} from "@mui/material";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { uploadFile } from "../../api/firebase-storage";
import { createPartnerArticle, deletePartnerArticle, getPartnerArticle, updatePartnerArticle } from "../../api/api";


export type ArticleType = {
  id: string,
  companyName: string;
  title: string;
  description: string;
  text: string;
  link?: string;
  img: string;
};



const getImage = (file : File): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    
    img.onload = (event) => {
      resolve(img);
    }

    img.onerror = (error) => {
      reject(error)
    }    
    img.src = url;
  })

}
const articleSchema = z.object({
  companyName: z.string().min(1, 'Поле не должно быть пустым'),
  title: z.string().min(1, 'Поле не должно быть пустым').max(20, "Название должно быть до 20 символов"),
  description: z.string().min(1, 'Поле не должно быть пустым').max(140, "Подводка должна быть до 140 символов"),
  text: z.string().min(140, "Текст должен быть от 140 символов"),
  img: z.string().min(1, 'Превью необходимо'),
  link: z.string().optional(),
})

type TArticleSchema = z.infer<typeof articleSchema>;


export default function AdminArticle() {

  const location = useLocation();
  const { id } = useParams();


  const inputRef = useRef<HTMLInputElement>();


  const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null)
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);





  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful},
    reset,
    setFocus,
    setValue,
    setError,
    getValues,
    clearErrors,
  } = useForm<TArticleSchema>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      companyName: '',
      title: '',
      description: '',
      text: '',
      link: '',
      img: '',
    }
  });


  useEffect(() => {
    
    if (Object.keys(errors).length > 0) {
      console.log(errors);
      
      setFocus(errors[0])
    }
  }, [errors])


  

  useEffect(() => {

    if (!id) {
      return;
    } else {
      (async () => {
        let {id : idArticle, img, ...data} = await getPartnerArticle(id);
       reset({ ...data, img});  
      })()
    }
    
    
  }, [id])


  useEffect(() => {
    if (!id) {
      reset();
    } 
  }, [isSubmitSuccessful])
  




  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const closeSnackbar = () => {
    setSnackbarMessage(null);
  }


  const showFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;

    if (files === null || !files.length) {
      setError('img', {message: 'Превью необходимо'})
      return;
    }

    const file = files[0];

    if (file.size === 0 || !file.type.startsWith('image/')) {
      setError('img', {message: 'Неверный тип файла'})
      return;
    }

    const image = await getImage(file);


    if (image.width < 200 || image.height < 200) {
      setError('img', {message: 'Изображение должно быть минимум 200×200'})
      return;
    }

    try {
      const url = await uploadFile(file);
      console.log(url);
      setValue('img', url);
      clearErrors('img');
    } catch (error: any) {
      setSnackbarMessage(`❌ ${error.message}`);
    }
  };


  const onSubmit = async (data: ArticleType) => {
    if (id) {
      try {        
        await updatePartnerArticle({...data, id: id})
        setSnackbarMessage('✅ Статья обновлена');
      } catch (error) {
        setSnackbarMessage(`❌ Не удалось создать статью ${error}`)
      }
    } else {
        try {
          await createPartnerArticle({...data})
          setSnackbarMessage('✅ Партнерская статья создана')
        } catch (error) {
          setSnackbarMessage(`❌ Не удалось создать статью ${error}`)
        }

    }
  };

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await deletePartnerArticle(id);
      navigate('/admin', {replace: true})
    } catch (error) {
      setSnackbarMessage(`❌ Не удалось удалить статью ${error}`)
    }
  }

    
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Typography variant="h4" mb={2}>
            {id ? <>Редактирование статьи - «{getValues('title')}»</> : <>Создание статьи - «{getValues('title')}» </>}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "5px" }}>
            <Button type="submit" variant="contained" color="success" disabled={(isSubmitting || Object.keys(errors).length > 0)}>
              Сохранить
            </Button>

            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon sx={{ color: "white" }} />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleDelete}>Удалить</MenuItem>
            </Menu>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller name="companyName" control={control} render={({field: {value, onChange, ref}, fieldState: {error}})=><TextField inputRef={ref} value={value} onChange={onChange} error={!!error} helperText={error ? error.message : null} fullWidth label="Компания" />} />
            </Grid>
            <Grid item xs={12}>
              <Controller name="title" control={control} render={({field: {value, onChange, ref}, fieldState: {error}})=><TextField inputRef={ref} value={value} onChange={onChange} error={!!error} helperText={error ? error.message : null} fullWidth label="Название статьи" />}/>
            </Grid>
            <Grid item xs={12}>
              <Controller name="description" control={control} render={({field: {value, onChange, ref}, fieldState: {error}})=><TextField inputRef={ref} value={value} onChange={onChange} error={!!error} helperText={error ? error.message : null} fullWidth  label="Подводка"  multiline maxRows={4} />}/>
            </Grid>
            <Grid item xs={12}>
              <Controller name="text" control={control} render={({field: {value, onChange, ref}, fieldState: {error}})=><TextField inputRef={ref} value={value} onChange={onChange}  error={!!error} helperText={error ? error.message : null} fullWidth label="Текст" multiline maxRows={12} />}/>
            </Grid>
            <Grid item xs={12}>
              <Controller name="link" control={control} render={({field: {value, onChange, ref}, fieldState: {error}})=><TextField inputRef={ref} value={value} onChange={onChange} error={!!error} helperText={error ? error.message : null} fullWidth label="Ссылка" />}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
             {getValues('img') ? <CardMedia
                component="img"
                height="140"
                image={getValues('img')}
                alt="preview article"
              /> : null}
              <CardContent>
               <Controller name="img"  control={control}  render={({field: {onChange, value, ref}, fieldState: {error}})=> 
               <input
                  name="img"
                  type="file"
                  ref={inputRef}
                  accept="image/*,.pdf"
                  onChange={showFile}
                />}/>
              </CardContent>
            </CardActionArea>
          </Card>
            {errors.img && <ErrorMessage>{`${errors.img.message}`}</ErrorMessage>}
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={typeof snackbarMessage === 'string'}
        onClose={closeSnackbar}
        message={snackbarMessage}
      />
    </form>
  );
}
