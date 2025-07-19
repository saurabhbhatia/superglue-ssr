import React from 'react'
import { 
  Form, 
  FormProps,
  Layout,
  TextField,
  TextFieldProps,
  SubmitButton,
  SubmitButtonProps
} from '@javascript/components'
import { useContent } from '@thoughtbot/superglue'
import { useAppSelector } from '@javascript/store'

type ContentProps = {
  postsPath: string
  postForm: FormProps<{
    body: TextFieldProps
    submit: SubmitButtonProps
  }>
}

export default function PostsNew() {
  const {
    postForm,
    postsPath,
  } = useContent<ContentProps>()
  const { 
    inputs, 
    form, 
    extras 
  } = postForm
  const validationErrors = useAppSelector((state) => state.flash["postFormErrors"])

  return (
    <Layout>
      <Form {...form} extras={extras} validationErrors={validationErrors} data-sg-visit>
        <TextField {...inputs.body} label="Body" errorKey="body" />
        <SubmitButton {...inputs.submit} type="submit"> {inputs.submit.text} </SubmitButton>
      </Form>

      <a href={postsPath} data-sg-visit>Back</a>
    </Layout>
  )
}
