// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
const player = require('play-sound')();
import * as path from 'path';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const basePath: string = path.join(context.extensionPath, 'audio');
	
    // Create a command to play the audio
    let playAudioCommand1 = vscode.commands.registerCommand('extension.playAudio1', () => {
        const audioFile = path.join(basePath, 'ck-motivation-1.wav'); // Replace 'audio.mp3' with the path to your audio file
        // Play the audio
        player.play(audioFile, (error: any) => {
            if (error) {
                vscode.window.showErrorMessage(`Error playing audio: ${error.message}`);
            }
        });
    });

    context.subscriptions.push(playAudioCommand1);

    // Create a button in the status bar
    let playAudioButton1 = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    playAudioButton1.text = "$(play) มึงอย่าโทษนู่นโทษนี่";
    playAudioButton1.command = 'extension.playAudio1';
    playAudioButton1.show();

	// Create a command to play the audio
    let playAudioCommand2 = vscode.commands.registerCommand('extension.playAudio2', () => {
        const audioFile = path.join(basePath, 'ck-motivation-2.wav'); // Replace 'audio.mp3' with the path to your audio file
        // Play the audio
        player.play(audioFile, (error: any) => {
            if (error) {
                vscode.window.showErrorMessage(`Error playing audio: ${error.message}`);
            }
        });
    });

    context.subscriptions.push(playAudioCommand2);

    // Create a button in the status bar
    let playAudioButton2 = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    playAudioButton2.text = "$(play) มันอยู่ที่ใจมึง";
    playAudioButton2.command = 'extension.playAudio2';
    playAudioButton2.show();

	// Create a command to play the audio
    let playAudioCommand3 = vscode.commands.registerCommand('extension.playAudio3', () => {
        const audioFile = path.join(basePath, 'ck-motivation-3.wav'); // Replace 'audio.mp3' with the path to your audio file
        // Play the audio
        player.play(audioFile, (error: any) => {
            if (error) {
                vscode.window.showErrorMessage(`Error playing audio: ${error.message}`);
            }
        });
    });

    context.subscriptions.push(playAudioCommand3);

    // Create a button in the status bar
    let playAudioButton3 = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    playAudioButton3.text = "$(play) มึงต้องเหนื่อยกว่าคนอื่น";
    playAudioButton3.command = 'extension.playAudio3';
    playAudioButton3.show();

	// Create a command to play the audio
    let playAudioCommand4 = vscode.commands.registerCommand('extension.playAudio4', () => {
        const audioFile = path.join(basePath, 'ck-motivation-4.wav'); // Replace 'audio.mp3' with the path to your audio file
        // Play the audio
        player.play(audioFile, (error: any) => {
            if (error) {
                vscode.window.showErrorMessage(`Error playing audio: ${error.message}`);
            }
        });
    });

    context.subscriptions.push(playAudioCommand4);

    // Create a button in the status bar
    let playAudioButton4 = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    playAudioButton4.text = "$(play) อย่ากระจอก";
    playAudioButton4.command = 'extension.playAudio4';
    playAudioButton4.show();
}

// This method is called when your extension is deactivated
export function deactivate() {}
