// Performance Monitoring Script
// Add this to check for errors and performance issues

(function() {
  'use strict';

  // 1. Log any JavaScript errors
  window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', {
      message: e.message,
      source: e.filename,
      lineno: e.lineno,
      colno: e.colno,
      error: e.error
    });
  });

  // 2. Log unhandled promise rejections
  window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled Promise Rejection:', e.reason);
  });

  // 3. Monitor performance metrics
  window.addEventListener('load', function() {
    setTimeout(function() {
      if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        const connectTime = perfData.responseEnd - perfData.requestStart;
        const renderTime = perfData.domComplete - perfData.domLoading;

        console.log('Performance Metrics:', {
          'Page Load Time': pageLoadTime + 'ms',
          'Connect Time': connectTime + 'ms',
          'Render Time': renderTime + 'ms',
          'DOM Interactive': (perfData.domInteractive - perfData.navigationStart) + 'ms',
          'DOM Complete': (perfData.domComplete - perfData.navigationStart) + 'ms'
        });

        // Log warning if page load is slow
        if (pageLoadTime > 3000) {
          console.warn('⚠️ Page load time is slow:', pageLoadTime + 'ms');
        }
      }

      // Check for Core Web Vitals (if supported)
      if (window.PerformanceObserver) {
        // Largest Contentful Paint (LCP)
        try {
          const lcpObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
            if (lastEntry.renderTime > 2500) {
              console.warn('⚠️ LCP is slow (should be < 2.5s)');
            }
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          // LCP not supported
        }

        // First Input Delay (FID)
        try {
          const fidObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach((entry) => {
              console.log('FID:', entry.processingStart - entry.startTime);
              if (entry.processingStart - entry.startTime > 100) {
                console.warn('⚠️ FID is slow (should be < 100ms)');
              }
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          // FID not supported
        }

        // Cumulative Layout Shift (CLS)
        try {
          let clsScore = 0;
          const clsObserver = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              if (!entry.hadRecentInput) {
                clsScore += entry.value;
              }
            }
            console.log('CLS Score:', clsScore);
            if (clsScore > 0.1) {
              console.warn('⚠️ CLS is high (should be < 0.1)');
            }
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          // CLS not supported
        }
      }

      // Check for render-blocking resources
      if (window.performance && window.performance.getEntriesByType) {
        const resources = window.performance.getEntriesByType('resource');
        const blockingResources = resources.filter(r => 
          (r.initiatorType === 'link' || r.initiatorType === 'script') &&
          r.renderBlockingStatus === 'blocking'
        );
        
        if (blockingResources.length > 0) {
          console.warn('⚠️ Render-blocking resources found:', blockingResources.length);
          blockingResources.forEach(r => {
            console.log('  - ' + r.name);
          });
        } else {
          console.log('✅ No render-blocking resources');
        }

        // Count total HTTP requests
        console.log('Total HTTP Requests:', resources.length);
        if (resources.length > 20) {
          console.warn('⚠️ High number of HTTP requests (target: < 20)');
        }
      }

    }, 0);
  });

  // 4. Check for missing images or resources
  document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(function(img) {
      img.addEventListener('error', function() {
        console.error('Failed to load image:', img.src);
      });
    });

    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(function(script) {
      script.addEventListener('error', function() {
        console.error('Failed to load script:', script.src);
      });
    });

    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    stylesheets.forEach(function(link) {
      link.addEventListener('error', function() {
        console.error('Failed to load stylesheet:', link.href);
      });
    });
  });

  // 5. Log console summary after 3 seconds
  setTimeout(function() {
    console.log('%c✅ Performance Monitoring Complete', 'color: green; font-weight: bold; font-size: 14px;');
    console.log('Check above for any warnings or errors that need attention.');
  }, 3000);

})();
