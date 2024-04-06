import { useEffect } from 'react'
import { useAppDispatch } from '../../hooks/useRedux'
import { setHeaderName } from '../../store/reducers/headerReducer';
import AdminArticles from '../../components/AdminArticles/AdminArtciles';
import { TextField, Theme, outlinedInputClasses } from '@mui/material';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import AdminArticle from '../../components/AdminArticleItem/AdminArticle';



const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    typography: {
      fontFamily: 'Rubik',
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: { 
            '--TextField-brandBorderColor': 'var(--border-color)',
            '--TextField-brandBorderHoverColor': '#B2BAC2',
            '--TextField-brandBorderFocusedColor': 'var(--input-brandColor)',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
            'label': {
              color: '#B2BAC2'
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            color: 'white',
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },

    },
  });



export default function PageAdminPanel({children}) {


    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setHeaderName('Админ панель'))
    }, [])

    const theme = useTheme();

  return (
      <ThemeProvider theme={customTheme(theme)}>
        <div className='grid gap-5 py-5'>
          {children}
        </div>
      </ThemeProvider>
  )
}
