import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css'

import $ from 'jquery'
import popper from 'popper.js'
import bootstrap from 'bootstrap'

import { createPost } from './posts'

document.querySelector('#allPosts').appendChild(createPost())