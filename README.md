# Cvičení 1 - Dotazník

V tomto cvičení budeme vytvářet jednoduchou aplikaci na tvorbu dotazníků.

Základ aplikace najdeš v [tomto repozitáři](https://github.com/Czechitas-podklady-WEB/dotaznik).


1. Udělej si fork repozitáře, ten si naklonuj k sobě do počítače a ve složce proveď:

	```
	npm install
	```

	Aplikaci spusť, abys veděla, že se vše povedlo a funguje to.

2. Prohlédni si vzhled aplikace a také její zdrojový kód. Nejsme už žádní troškaři, aplikace se skládá hned z pěti oddělených komponent.

3. Prohlédni si, jak jsou navzájem propojené a seznam se s celkovou strukturou aplikace. Komponentu `Icon` zatím moc nezkoumej. Je v ní trochu nepřehledný kód pro zobrazování ikonek.

4. Prohlédněte si komponentu Option. Přepište ji tak, aby používala destrukturování props.

5. Totéž proveď s komponentami Question a QuestionBody.


## Dotazník s fajfkou

Pokračujme v příkladu. Chceme zařídit, aby se po kliknutí na jednu z 5 možných odpovědí u otázky zobrazila ikonka fajfky.

6. Nejprve chceme u otázky reagovat na kliknutí na jednu z jejich možností. V komponentě `Option` přidej divu s třidou `option` posluchač události `onClick`. Zatím ho naprogramuj tak, aby do konzole vypsal text vybrané odpovědi, tedy například `“spíše souhlasím”`.

7. V komponentě `Question` si vytvořme stav `answered`. Tento stav bude říkat, zda už je otázka zodpovězena, nebo ještě nikoliv. Výchozí hodnota tohoto stavu bude `false`.

8. Zařiď následující:

	- pokud je ve stavu `answered` hodnota `false`, chceme, aby componenta `QuestionBody` měla ikonku `symbolQuestion`
	- pokud je stav `true`, chceme, aby typ ikonky byl `symbolTick`

9. Nyní chceme komponentě `Option` přidat callback, pomocí kterého může informovat svého rodiče, že otázka byla zodpovězena. Přidej tedy komponentě `Option` prop s názvem `onSelected`. V této prop očekáváme funkci. Zařiď, aby komponenta `Option` zavolala funkci `onSelected` ve chvíli, kdy na tuto komponentu klikneme.

10. V komponentě Question si vytvořte funkci `handleSelect`. Všem komponentám `Option` pak skrze prop `onSelected` tuto funkci předejte. Funkce `handleSelect` nechť nastaví stav `answered` na hodnotu `true`. Takto zajístíme, že kdykoliv uživatel klikne na nějakou možnost, stav se nám nastaví na `true` a tím se změní ikonka v těle otázky na fajfku.

Takto jsme zařídili, že dvě sourozenecké komponenty `Option` a `QuestionBody` spolu komunikují skrze stav rodiče.


## Dotazník s odpovědí

Pokračujme v příkladu. Nyní budeme chtít místo fajfky zobrazovat přímo uživatelem vybranou odpověd.

11. Stav `answered` uvnitř komponenty `Question` přejmenuj na `answer`. Nyní bude obsahovat řetězec s typem ikonky pro `QuestionBody`. Výchozí hodnota stavu bude `symbolQuestion`.

12. Zařiď, aby komponenta `QuestionBody` zobrazovala místo `symbolQuestion` nebo `iconTick` ikonku odpovědi, na kterou uživatel kliknul.

13. Nyní budeme potřebovat, aby nám komponenta `Option` skrze callback předala typ ikonky, na kterou uživatel kliknul. Komponenta `Option` tedy musí callbacku `onSelected` předat typ ikony, kterou zobrazuje.

14. Funkce `handleSelect` v komponentě `Question` bude pak mít jeden parametr, který nazveme `iconType`. Jakmile se tato funkce zavolá, nastavíme náš stav `answer` na hodnotu získanou v tomto parametru.

Tímto jsem zařídili, že komponenta `Option` předá svému sourozenci `QuestionBody` informaci o tom, kterou ikonku uživatel vybral.