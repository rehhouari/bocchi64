# Bocchi64

Encode a file into multiple limited-length text messages and vice-versa.

This was mainly made to ease the process of encoding files into text (base64) and sending it through messages, like on facebook.

It handles encoding & cutting text, and also adds index metadata for each chunk/message.

This metadata makes it less confusing when trying to decode many messages into one file.

Instead of one text box, paste the first message, and it automatically add as many text boxes you need.

Each of these text boxes will have a green border when the index of the pasted message is correct (make sure to click outside of the box after pasting for it to work).
