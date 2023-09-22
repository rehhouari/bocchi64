
export default () => ({
	tab: 'tomessages',
	// 	file to messages //
	// currently selected file to be converted
	selectedFile: null,
	// the max length of a message to be generated
	messageLength: Alpine.$persist(5000),
	// messages generated from file
	messages: Alpine.$persist([]),
	// whether to show result screen or not
	results: Alpine.$persist(false),

	// messages to file //
	chunks: 0,
	inputMessages: [],
	validFirstMessage: false,
	addMetadata: true,
	init() {
	},
	clear() {
		this.messages = []
		this.selectedFile = null
		this.results = false
		this.inputMessages = []
		this.chunks = 0
		this.validFirstMessage = false
		this.addMetadata = true

	},
	fileSelected(event) {
		const element = event.target
		let fileList = element.files
		if (fileList) {
			console.log('You selected ' + fileList[0].name);
			this.selectedFile = fileList[0]
		} else {
			this.selectedFile = null
		}
	},
	pastedFirstMessage(element) {
		let text = element.value
		if (text.length > 6) {
			let metadata = text.split(";", 1)
			if (!metadata.length) {

			}
			metadata = metadata[0].split("/")
			if (metadata.length == 2) {
				const index = parseInt(metadata[0])
				if (index != 1) {
					window.alert("paste the first message first")
					this.validFirstMessage = false
					return
				}
				const size = parseInt(metadata[1])
				this.chunks = size - 1
				this.inputMessages[0] = text
				this.validFirstMessage = true
			} else {
				window.alert("not a valid message")
				this.validFirstMessage = false
				return
			}
		}
	},
	download() {
		let messages = this.inputMessages.map((message, index) => {
			const metadata = message.split(";", 1)
			if (metadata.length) {
				return message.substring(metadata[0].length + 1)
			}
			else alert("Metadata length shouldn't be 0")
		})

		let text = messages.join("")
		// Split the Base64 data from the header (e.g., "data:image/png;base64,")
		const parts = text.split(",");
		const contentType = parts[0].split(":")[1].split(";")[0];
		const data = atob(parts[1]);

		const blob = new Blob(
			[new Uint8Array(data.length).map((_, i) => data.charCodeAt(i))],
			{
				type: contentType,
			}
		);

		const url = window.URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "downloaded_file";
		document.body.appendChild(a);
		a.click();
		window.URL.revokeObjectURL(url);
	},
	fileToMessages() {
		this.results = true
		const reader = new FileReader();
		let fullMessage = ''
		let chunkSize = this.addMetadata ? this.messageLength - 6 : this.messageLength
		reader.onload = function (event) {
			const base64 = event.target.result;
			fullMessage = base64;
			console.log("UPLOAD LENGTH", fullMessage.length)
			let chunks = this.splitChunks(fullMessage, chunkSize)
			if (this.addMetadata) {
				chunks = chunks.map((chunk, index) => {
					let metadata = `${(index + 1)}/${chunks.length};`
					return metadata + chunk
				})
			}
			this.messages = chunks
		}.bind(this);
		reader.readAsDataURL(this.selectedFile)
	},
	validateMessage(i) {
		if (!this.inputMessages[i] || !this.inputMessages[i].length) return false
		let pastedMessageIndex = this.inputMessages[i].split("/", 1)
		if (!pastedMessageIndex) return false
		return Number(pastedMessageIndex) == (i + 1)
	},
	splitChunks(str, chunkSize) {
		if (chunkSize <= 0) {
			throw new Error("Chunk size must be greater than zero");
		}

		return str.match(new RegExp(`.{1,${chunkSize}}`, 'g')) || [];
	}
})
