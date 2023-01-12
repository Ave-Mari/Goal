import React from 'react'
import './../language-switcher.css'

export default function LanguageSwitcher() {
  return (
        <center>
	<div class="switch">
	    <input id="language-toggle" 
        class="check-toggle 
        check-toggle-round-flat" 
        type="checkbox"
        />
	    <label for="language-toggle"></label>
	    <span class="ru">🇷🇺</span>
	    <span class="eng">🇬🇧</span>
  	</div>
 </center>
  )
}
