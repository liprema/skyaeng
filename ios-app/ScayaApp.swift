import SwiftUI
import WebKit
import UIKit

@main
struct ScayaUniversalApp: App {
    var body: some Scene {
        WindowGroup {
            ScayaRootView()
                .ignoresSafeArea(.all)
                .preferredColorScheme(.light)
        }
    }
}

struct ScayaRootView: View {
    var body: some View {
        ZStack {
            Color(red: 237/255, green: 228/255, blue: 206/255) // #EDE4CE Groovy Warm Cream
                .ignoresSafeArea()
            ScayaWebContainerView()
                .ignoresSafeArea()
        }
    }
}

struct ScayaWebContainerView: UIViewRepresentable {
    func makeCoordinator() -> Coordinator {
        Coordinator()
    }

    func makeUIView(context: Context) -> WKWebView {
        let config = WKWebViewConfiguration()
        config.allowsInlineMediaPlayback = true
        config.mediaTypesRequiringUserActionForPlayback = []
        config.preferences.javaScriptCanOpenWindowsAutomatically = true

        let contentController = WKUserContentController()
        contentController.add(context.coordinator, name: "scayaNativeHaptics")
        config.userContentController = contentController

        let webView = WKWebView(frame: .zero, configuration: config)
        webView.isOpaque = false
        webView.backgroundColor = UIColor(red: 237/255, green: 228/255, blue: 206/255, alpha: 1.0)
        webView.scrollView.backgroundColor = UIColor(red: 237/255, green: 228/255, blue: 206/255, alpha: 1.0)
        webView.scrollView.contentInsetAdjustmentBehavior = .never
        webView.scrollView.bounces = true
        webView.navigationDelegate = context.coordinator

        // Сначала проверяем локальный бандл WebApp (офлайн-режим), иначе открываем облачный сервер
        if let localIndexURL = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "WebBundle") {
            webView.loadFileURL(localIndexURL, allowingReadAccessTo: localIndexURL.deletingLastPathComponent())
        } else if let rootIndexURL = Bundle.main.url(forResource: "index", withExtension: "html") {
            webView.loadFileURL(rootIndexURL, allowingReadAccessTo: rootIndexURL.deletingLastPathComponent())
        } else if let remoteURL = URL(string: "https://40bcc6e3aa1ca1.lhr.life/?uid=542487197") {
            webView.load(URLRequest(url: remoteURL))
        }

        return webView
    }

    func updateUIView(_ uiView: WKWebView, context: Context) {}

    final class Coordinator: NSObject, WKNavigationDelegate, WKScriptMessageHandler {
        func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
            guard message.name == "scayaNativeHaptics",
                  let style = message.body as? String else { return }
            DispatchQueue.main.async {
                switch style {
                case "success", "win":
                    UINotificationFeedbackGenerator().notificationOccurred(.success)
                case "error", "wrong":
                    UINotificationFeedbackGenerator().notificationOccurred(.error)
                default:
                    UIImpactFeedbackGenerator(style: .light).impactOccurred()
                }
            }
        }
    }
}
