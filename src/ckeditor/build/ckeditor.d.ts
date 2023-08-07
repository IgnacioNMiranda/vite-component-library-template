/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic'
import { Autoformat } from '@ckeditor/ckeditor5-autoformat'
import { Bold, Italic, Strikethrough, Underline } from '@ckeditor/ckeditor5-basic-styles'
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote'
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services'
import { Essentials } from '@ckeditor/ckeditor5-essentials'
import { Heading } from '@ckeditor/ckeditor5-heading'
import { Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload } from '@ckeditor/ckeditor5-image'
import { Indent } from '@ckeditor/ckeditor5-indent'
import { Link } from '@ckeditor/ckeditor5-link'
import { List } from '@ckeditor/ckeditor5-list'
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed'
import { Paragraph } from '@ckeditor/ckeditor5-paragraph'
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office'
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format'
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table'
import { TextTransformation } from '@ckeditor/ckeditor5-typing'
declare class Editor extends ClassicEditor {
  static builtinPlugins: (
    | typeof TextTransformation
    | typeof Autoformat
    | typeof Bold
    | typeof Italic
    | typeof Strikethrough
    | typeof Underline
    | typeof BlockQuote
    | typeof CloudServices
    | typeof Essentials
    | typeof Paragraph
    | typeof Heading
    | typeof Image
    | typeof ImageCaption
    | typeof ImageStyle
    | typeof ImageToolbar
    | typeof ImageUpload
    | typeof Indent
    | typeof Link
    | typeof List
    | typeof MediaEmbed
    | typeof PasteFromOffice
    | typeof RemoveFormat
    | typeof Table
    | typeof TableToolbar
  )[]
  static defaultConfig: {
    toolbar: {
      items: string[]
    }
    language: string
    image: {
      toolbar: string[]
    }
    table: {
      contentToolbar: string[]
    }
  }
}
export default Editor
