package com.example.mywebbrowser;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ImageButton;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // WebView
        WebView mywebview = (WebView) findViewById(R.id.web_browser);

        // Setting up WebView client
        mywebview.setWebViewClient(new WebViewClient());
        mywebview.loadUrl("https://www.google.ca");
        mywebview.canGoBack();

        // TextView
        TextView mytextview = (TextView) findViewById(R.id.url_txt);

        // Image Button variable for back button
        ImageButton mybackbutton = (ImageButton) findViewById(R.id.back_btn);

        // When back arrow is clicked
        mybackbutton.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    mywebview.goBack();
                }
            } );
        // Image Button variable for search button
        ImageButton mysearchbutton = (ImageButton) findViewById(R.id.search_btn);

        // When search button is clicked
        mysearchbutton.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {
                mywebview.loadUrl("https://"+mytextview.getText().toString());
            }
        } );
    }
}